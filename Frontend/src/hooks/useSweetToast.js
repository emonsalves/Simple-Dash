import Swal from "sweetalert2";

const useSweetToast = () => {
  const configToast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const showToast = () => {
    configToast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
  };

  return { showToast };
};

export default useSweetToast;
