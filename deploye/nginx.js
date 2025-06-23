// NGINX->

// 1. sudo nginx -t; 

// For testing the configurations if correct gives the successfull.

// 2. sudo systemctl restart nginx, reload nginx

// 3.sudo nano /etc/nginx/sites-available/your-site

// by running this commnd we will have only one file in sites available folder either our app name or default and we will do all the app configurations here like will define all the ports ad routes for different different aps.

// 4. /etc/nginx/sites-enabled/   

// In this sites enabled directory we will not have anything.


// 5. sudo nano /etc/nginx/nginx.conf

// This command will open the nginx configuration where we will have 

// include /etc/nginx/conf.d/*.conf;
// include /etc/nginx/sites-available/*;

// in this commad we willhave the sites-enabled but we will change it enabled to available.

// 6.Reload systemd: 
// sudo systemctl daemon-reload

// 7. sudo rm /etc/nginx/sites-available/default
//    sudo rm /etc/nginx/sites-enabled/default
   
//    For removing the apps present inside the available and enabled folders.
   
// -------------------------------------------------------------------



// PM2 - 

// https://devhints.io/pm2 ----All commands

// Generate SSL certificate by running this below command =

// sudo certbot --nginx -d api.trenchesai.com



// This below mxToolBox website tell us the details of our domain and the ip address and the server details. We can check the domain and ip address lke which domain is pointing to which ip address.

//https://mxtoolbox.com/SuperTool.aspx?action=a%3aapi.test.trenchesai.com&run=toolpage






































































































// TrenchesAi-Beta Backend nginx configuration=>

// # Define allowed origins in a map block
// map $http_origin $cors_allow_origin {
//     default "";
//     "http://localhost:5500" "http://localhost:5500";
//     "http://localhost:5174" "http://localhost:5174";
//     "http://localhost:5173" "http://localhost:5173";
//     "https://trenchesai.unclod.com" "https://trenchesai.unclod.com";
//     "http://trenchesai.unclod.com" "http://trenchesai.unclod.com";
//     "https://test.trenchesai.com" "https://test.trenchesai.com";
//     "http://test.trenchesai.com" "http://test.trenchesai.com";

// }

// # API SERVER CONFIGURATION
// server {
//     server_name api.trenchesai.unclod.com;

//     # Health Check Endpoint
//     location /nginxcheck {
//         default_type text/plain;
//         return 200 'NGINX is up and running\n';
//     }

//     # CORS Handling
//     location / {
//         # Preflight OPTIONS request
//         if ($request_method = 'OPTIONS') {
//             add_header 'Access-Control-Allow-Origin' $cors_allow_origin;
//             add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, DELETE, PUT, PATCH';
//             add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization, Origin' always;
//             add_header 'Access-Control-Allow-Credentials' 'true' always;
//             return 204;
//         }

//         # Actual CORS handling for regular requests
//         add_header 'Access-Control-Allow-Origin' $cors_allow_origin always;
//         add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, DELETE, PUT, PATCH' always;
//         add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization, Origin' always;
//         add_header 'Access-Control-Allow-Credentials' 'true' always;
//     }

//     # Service Proxies
//     location /admin-service/ { proxy_pass http://127.0.0.1:3010/; include proxy_params; }
//     location /user-service/ { proxy_pass http://127.0.0.1:3004/; include proxy_params; }
//     location /bot-event-service/ { proxy_pass http://127.0.0.1:3005/; include proxy_params; }
//     location /copy-trading-service/ { proxy_pass http://127.0.0.1:3006/; include proxy_params; }
//     location /trading-service/ { proxy_pass http://127.0.0.1:3003/; include proxy_params; }
//     location /token-data-service/ { proxy_pass http://127.0.0.1:3001/; include proxy_params; }
//     location /trade-action-execution-service/ { proxy_pass http://127.0.0.1:3013/; include proxy_params; }
//     location /userGateway/ { proxy_pass http://127.0.0.1:3007/; include proxy_params; }
//     location /admin/ { proxy_pass http://127.0.0.1:3011/; include proxy_params; }
//     location /active-trade-token-price-service/ { proxy_pass http://127.0.0.1:3015/; include proxy_params; }
//     location /event-consumer-service/ { proxy_pass http://127.0.0.1:4010/; include proxy_params; }
//     location /event-publisher-service/ { proxy_pass http://127.0.0.1:4009/; include proxy_params; }
//     location /ai-signal-service/ { proxy_pass http://127.0.0.1:3002/; include proxy_params; }

//     # WebSocket and Event Streaming
//     location /event-streaming-service/ {
//         proxy_pass http://127.0.0.1:4011/event-streaming-service/;
//         proxy_http_version 1.1;
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection "Upgrade";
//         proxy_set_header Host $host;
//         proxy_cache_bypass $http_upgrade;
//         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
//         proxy_read_timeout 60m;
//         proxy_send_timeout 60m;
//         include proxy_params;
//     }

//     location /socket.io/ {
//         proxy_pass http://127.0.0.1:4011/socket.io/;
//         proxy_http_version 1.1;
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection "Upgrade";
//         proxy_set_header Host $host;
//         proxy_cache_bypass $http_upgrade;
//         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
//         proxy_read_timeout 60m;
//         proxy_send_timeout 60m;
//         include proxy_params;
//     }

//     listen 443 ssl; # managed by Certbot
//     ssl_certificate /etc/letsencrypt/live/api.trenchesai.unclod.com/fullchain.pem; # managed by Certbot
//     ssl_certificate_key /etc/letsencrypt/live/api.trenchesai.unclod.com/privkey.pem; # managed by Certbot
//     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
//     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

// }


// server {
//     if ($host = api.trenchesai.unclod.com) {
//         return 301 https://$host$request_uri;
//     } # managed by Certbot


//     listen 80;
//     server_name api.trenchesai.unclod.com;
//     return 404; # managed by Certbot


// }






// OpenPhone nginx configuration.


// rabindra_singh_imentus_com@instance-20250206-063101:/etc/nginx/sites-available$ sudo cat openphone 
// server {
//     server_name toolopenphone.fallegurhomes.com;
    
//     # For Let's Encrypt verification
//     location /.well-known/acme-challenge/ {
//         root /var/www/html;
//     }
    
//     # Route API requests to the backend
//     location /api/ {
//         proxy_pass http://localhost:8000;
//         proxy_http_version 1.1;
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection upgrade;
//         proxy_set_header Host $host;
//         proxy_cache_bypass $http_upgrade;
//     }
    
//     # Route all other requests to the frontend
//     location / {
//         proxy_pass http://localhost:3000;
//         proxy_http_version 1.1;
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection upgrade;
//         proxy_set_header Host $host;
//         proxy_cache_bypass $http_upgrade;
//     }

//     listen 443 ssl; # managed by Certbot
//     ssl_certificate /etc/letsencrypt/live/toolopenphone.fallegurhomes.com/fullchain.pem; # managed by Certbot
//     ssl_certificate_key /etc/letsencrypt/live/toolopenphone.fallegurhomes.com/privkey.pem; # managed by Certbot
//     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
//     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

// }
// server {
//     if ($host = toolopenphone.fallegurhomes.com) {
//         return 301 https://$host$request_uri;
//     } # managed by Certbot


//     listen 80;
//     server_name toolopenphone.fallegurhomes.com;
//     return 404; # managed by Certbot


// }rabindra_singh_imentus_com@instance-20250206-063101:/etc/nginx/sites-available$ 




