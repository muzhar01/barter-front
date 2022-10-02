import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillGray800: "bg-gray_800 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-gray_800",
  OutlineBluegray100: "border border-bluegray_100 border-solid text-gray_800",
  OutlineGray800: "border border-gray_800 border-solid text-gray_800",
  OutlineGray500: "border-2 border-gray_500 border-solid text-gray_500",
  icbFillGray800: "bg-gray_800",
};
const sizes = {
  sm: "xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] p-[15px] lg:p-[8px]",
  md: "lg:p-[12px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] p-[21px]",
  smIcn: "lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px]",
  mdIcn: "xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] p-[16px] lg:p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    "FillGray800",
    "FillWhiteA700",
    "OutlineBluegray100",
    "OutlineGray800",
    "OutlineGray500",
    "icbFillGray800",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn", "mdIcn"]),
};
Button.defaultProps = { className: "", variant: "", size: "" };

export { Button };
