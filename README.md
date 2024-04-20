## Hướng dẫn cài đặt

- Clone the repo
- Run ```bash composer install```
- Run `php -r "file_exists('.env') || copy('.env.example', '.env');"`
- Run `php artisan key:generate --ansi`
- Tạo database tên `db_ecommerce` (hoặc bạn thay đổi tên trong .env) tại localhost
- Chỉnh sửa `.env` file
- Run `npm install`
- Run `php artisan migrate --seed` 
