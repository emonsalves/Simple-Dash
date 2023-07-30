import Swal from "sweetalert2";

const useSweetAlert = () => {
  const showAlert = ({ title, text, icon, timer, html }) => {
    Swal.fire({
      title,
      text,
      icon,
      timer,
      html,
    });
  };

  return { showAlert };
};

export default useSweetAlert;
