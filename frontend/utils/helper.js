import { toast } from "react-toastify";

export const getDiscountedPricePercentage = (originalPrice, price) => {
  const discountPercentage = ((originalPrice - price) / originalPrice) * 100;
  const roundedDiscountPercentage = Math.round(discountPercentage);
  return roundedDiscountPercentage;
}

export const useSlug = (searchValue) => {
  const slug = window.location.pathname.replace(searchValue, '');
  return slug;
}

// Toast message function
export const useNotify = (successMsg) => {
  toast.success(successMsg, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    bodyClassName: "custom-toast-body",
  });
}
