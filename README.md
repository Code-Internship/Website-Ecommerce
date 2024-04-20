## Hướng dẫn cài đặt

- Clone the
- Run
```bash
git clone https://github.com/Code-Internship/Website-Ecommerce.git
```
- Run
```bash
composer install
```
- Run
```bash
php -r "file_exists('.env') || copy('.env.example', '.env');"
```
- Run
```bash
php artisan key:generate --ansi
```
- Tạo database tên
```bash
db_ecommerce
```
(hoặc bạn thay đổi tên trong .env) tại localhost
- Chỉnh sửa `.env` file
- Run
```bash
npm install
```
- Run
```bash
php artisan migrate --seed
```
- Run
```bash
npm install vite@latest
```
- Tiếp theo di chuyển đến thư mục
```bash
cd react
```
- Chạy lênh sau để khởi động hệ thống
```bash
npm run dev
```
