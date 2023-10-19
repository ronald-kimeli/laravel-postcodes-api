# Laravel postcodes API

Build on Laravel RESTFUL API using api_key middleware, jQuery and Bootstrap Css.
You inquire Street Address, Latitude and Longitude using API key and postcode.

## Installation

* clone this project into your machine

```bash
git clone https://github.com/ronald-kimeli/laravel-postcodes-api.git
```

* Install project dependencies

```php
composer install
```

```javascript
npm install
```

* Create .env file through copy

```bash
cp .env.example .env
```

* Provide database credentials below in .env file

```bash
    DB_DATABASE=?
    DB_USERNAME=?
    DB_PASSWORD=?
```

* Generate new key, migrations/seeding and optimize the application before running the server

```php
php artisan migrate:fresh --seed && php artisan key:generate && php artisan optimize
```

## Run the application

* __*On terminal split into two*__

* First one || Run laravel app

```php
php artisan serve
```

* Second One || Run Node for bundling frontend

```php
npm run dev
```

* Navigate to the browser.

## Testing

* __*On Browser*__

You need to copy api_key on the button *API_KEY* and paste as api_key then provide a valid postcode and click search as shown below.

* The blank application before querying locations

![alt text](https://github.com/ronald-kimeli/laravel-postcodes-api/blob/master/public/images/Screenshot1.png?raw=true)

* Input both postcode and api_key then search

![alt text](https://github.com/ronald-kimeli/laravel-postcodes-api/blob/master/public/images/Screenshot2.png?raw=true)

* Success! Query after both valid api_key and postcode.

![alt text](https://github.com/ronald-kimeli/laravel-postcodes-api/blob/master/public/images/Screenshot3.png?raw=true)

> ! Lastly Query more. Note! The locations data is dummy feel free to insert yours and use The end
