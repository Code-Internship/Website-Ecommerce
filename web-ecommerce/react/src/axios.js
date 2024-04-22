import axios from "axios";
import router from "./routes/router";

// Tạo một thể hiện của axios với URL cơ sở được chỉ định
const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

// Thêm trình chặn yêu cầu để đặt tiêu đề Cấp phép bằng mã thông báo từ bộ nhớ cục bộ
axiosClient.interceptors.request.use((config) => {
  //  Lấy mã thông báo từ bộ nhớ cục bộ và thêm nó vào tiêu đề của yêu cầu
  config.headers.Authorization = `Bearer ${localStorage.getItem("TOKEN")}`;
  return config;
});

// Thêm bộ chặn phản hồi để xử lý các phản hồi trái phép
axiosClient.interceptors.response.use(
  (response) => {
    // Nếu phản hồi thành công, trả về
    return response;
  },
  (error) => {
    // Nếu phản hồi có trạng thái 401 (trái phép), hãy điều hướng đến trang đăng nhập và trả về lỗi
    if (error.response && error.response.status === 401) {
      router.navigate("/signin");
      return error;
    }
    throw error;
  }
);

export default axiosClient;
