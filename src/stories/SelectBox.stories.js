import { SelectBox } from "components";
export default {
  title: "muzhar_hussain_s_application/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  variant: "OutlineBluegray100",
  size: "sm",
  className: "w-[300px]",
};
