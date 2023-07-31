import Swal from "sweetalert2";

const useSweetAlert = () => {
  const showAlert = async ({ title, text, icon, timer, html }) => {
    await Swal.fire({
      title,
      text,
      icon,
      timer,
      html,
    });
  };

  const showConfirm = async ({
    title,
    html,
    text,
    icon,
    confirmButtonText,
    cancelButtonText,
    preConfirm,
  }) => {
    return await Swal.fire({
      title,
      html,
      text,
      icon,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText,
      cancelButtonText,
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
      preConfirm,
    });
  };

  return { showAlert, showConfirm };
};

export default useSweetAlert;
