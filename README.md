# Thực hành 1: Blog Listing Page - NextJS & Tailwind

**Thông tin sinh viên:**
- **Họ và tên:** N23DCCN117
- **Mã sinh viên (MSV):** Nguyễn Gia Quân
- **Nhóm:** 2

## Mô tả ngắn về bài làm
Đây là dự án thực hành cá nhân môn Thực hành Lập trình Web. Trong bài lab này, em đã xây dựng một trang Blog hoàn chỉnh sử dụng **Next.js (App Router)** và **Tailwind CSS**. 

Các công việc đã hoàn thành:
1. **Thiết lập dự án Next.js:** Khởi tạo project với Tailwind UI và ESLint.
2. **Xây dựng UI tái sử dụng:** Tạo các component `Header.js`, `Badge.js` theo yêu cầu giao diện (responsive layout).
3. **Fetching List Data:** Fetch dữ liệu tĩnh từ `JSONPlaceholder API` trong Server Component (`app/page.js`) để hiển thị danh sách dạng Grid (hiển thị 12 post đầu tiên) tái sử dụng component `BlogCard`.
4. **Dynamic Routing / Detail Page:** Hoàn thiện bài tập về nhà bằng việc tạo trang chi tiết bài viết tại `app/blog/[id]/page.js`. Quá trình này bao gồm fetch dữ liệu theo biến `id` tự động, và trang bị đầy đủ style responsive cho nội dung chi tiết.