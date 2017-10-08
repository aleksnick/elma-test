#!/usr/bin/env bash

apt-get update

apt-get install -y nginx

if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant /var/www
fi

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

cp /vagrant/vgr/ngx.conf /etc/nginx/nginx.conf
cp /vagrant/vgr/nginx.conf /etc/nginx/sites-enabled/azot-btc

systemctl restart nginx.service

cd /vagrant
sudo npm install -g webpack webpack-dev-server rimraf
sudo npm install
sudo npm run serve
