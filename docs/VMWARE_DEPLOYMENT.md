# VMware VM deployment guide (Ubuntu + Nginx + PM2)

This guide is for deploying the Next.js app on your VMware VM using Node runtime (recommended for API routes like `/api/contact`).

## 1) Prepare VM

```bash
sudo apt update
sudo apt install -y curl git nginx
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```

## 2) Clone project and install

```bash
git clone <your-repo-url> /opt/tuskq
cd /opt/tuskq
npm ci
```

## 3) Environment variables

Create `.env.production`:

```bash
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
ALLOWED_CONTACT_ORIGINS=https://tuskq.com,https://www.tuskq.com
NEXT_PUBLIC_SUPPORT_EMAIL=support@tuskq.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<optional-token>
```

## 4) Build and run app

```bash
npm run build
pm2 start npm --name tuskq -- start -- --port 3000
pm2 save
pm2 startup
```

## 5) Configure Nginx reverse proxy

Create `/etc/nginx/sites-available/tuskq`:

```nginx
server {
    listen 80;
    server_name tuskq.com www.tuskq.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:

```bash
sudo ln -s /etc/nginx/sites-available/tuskq /etc/nginx/sites-enabled/tuskq
sudo nginx -t
sudo systemctl restart nginx
```

## 6) Add HTTPS (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d tuskq.com -d www.tuskq.com
```

## 7) Updating deployment

```bash
cd /opt/tuskq
git pull
npm ci
npm run verify
pm2 restart tuskq
```

## 8) Basic checks

```bash
curl -I https://tuskq.com
curl -I https://tuskq.com/sitemap.xml
curl -I https://tuskq.com/robots.txt
```
