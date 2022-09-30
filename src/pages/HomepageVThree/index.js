import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Button,
  Grid,
  Stack,
  List,
  RatingBar,
} from "components";

const HomepageVThreePage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    navigate("/categorieswithsidebar");
  }
  function handleNavigate11() {
    navigate("/categorieswithsidebar");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Column className="items-center 3xl:pb-[107px] lg:pb-[69px] xl:pb-[79px] 2xl:pb-[89px] w-[100%]">
            <Row className="bg-white_A700 items-center lg:p-[19px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] w-[100%]">
              <Text
                className="common-pointer cursor-pointer hover:font-bold font-normal lg:ml-[64px] xl:ml-[73px] 2xl:ml-[82px] 3xl:ml-[99px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]"
                onClick={handleNavigate11}
              >
                Categories
              </Text>
              <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                New Arrival
              </Text>
              <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                Features
              </Text>
              <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                Collections
              </Text>
              <Img
                src="images/img_volume.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[124px] xl:ml-[142px] 2xl:ml-[159px] 3xl:ml-[191px] w-[2%]"
                alt="volume"
              />
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Elliye{" "}
              </Text>
              <Img
                src="images/img_icon.svg"
                className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:ml-[347px] xl:ml-[396px] 2xl:ml-[446px] 3xl:ml-[535px] w-[9%]"
                alt="icon"
              />
            </Row>
            <Row className="bg-white_A700 items-center lg:px-[187px] xl:px-[214px] 2xl:px-[241px] 3xl:px-[289px] w-[100%]">
              <Column className="bg-white_A700 3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_ticket.svg"
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] mt-[1px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                  alt="ticket"
                />
                <Text className="font-normal lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                  Jacket
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_share.svg"
                  className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] mt-[3px] w-[45%]"
                  alt="share"
                />
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                  Shirt
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_bookmark.svg"
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] mt-[1px] w-[28%]"
                  alt="bookmark"
                />
                <Text className="font-normal lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                  Pants
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_settings.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[46%]"
                  alt="settings"
                />
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                  Shoes
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_ticket_34X24.svg"
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] mt-[1px] w-[32%]"
                  alt="ticket One"
                />
                <Text className="font-normal lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                  Dress
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_signal.svg"
                  className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[35%]"
                  alt="signal"
                />
                <Text className="font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                  Accesories
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_trash.svg"
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] mt-[2px] w-[38%]"
                  alt="trash"
                />
                <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                  Skirt
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_vector.svg"
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:w-[19px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[29px]"
                  alt="Vector"
                />
                <Text className="font-normal 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                  Underwear
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_car_9X39.svg"
                  className="lg:h-[6px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] w-[53%]"
                  alt="car"
                />
                <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                  More
                </Text>
              </Column>
            </Row>
            <Line className="bg-gray_50 h-[1px] w-[85%]" />
          </Column>
        </header>
        <Column
          className="bg-cover bg-repeat items-center w-[100%]"
          style={{ backgroundImage: "url('images/img_herosection.png')" }}
        >
          <Column className="bg-white_A700_82 xl:p-[104px] 2xl:p-[117px] 3xl:p-[141px] lg:p-[91px] w-[100%]">
            <Button
              className="font-medium font-poppins 3xl:ml-[113px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[94px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[17%]"
              size="sm"
              variant="FillWhiteA700"
            >
              50% Off Limited Offer
            </Button>
            <Text className="font-bold font-playfairdisplay 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[96px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_800 w-[auto]">
              Summer Collection
            </Text>
            <Text className="font-normal font-poppins lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] 3xl:ml-[113px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[94px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[40%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
            <Row className="bg-gray_800 font-poppins items-center 3xl:ml-[113px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[94px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[76px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] w-[15%]">
              <Text className="font-medium xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Shop Now
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[13%]"
                alt="arrowright"
              />
            </Row>
          </Column>
        </Column>
        <Row className="items-center justify-between lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[85%]">
          <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
            Featured
          </Text>
          <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
            View all
          </Text>
        </Row>
        <Row className="items-center lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] w-[85%]">
          <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-2 w-[32%]">
            <Column className="items-center pb-[4px] w-[100%]">
              <Img
                src="images/img_rectangle39.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                alt="RectangleThirtyNine"
              />
              <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[66%]">
                Green <br />
                Warm Jacket
              </Text>
              <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
            <Column className="items-center pb-[4px] w-[100%]">
              <Img
                src="images/img_rectangle39_245X245.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                alt="RectangleThirtyNine One"
              />
              <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[66%]">
                Black
                <br />
                Warm Jacket
              </Text>
              <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
            <Column className="items-center pb-[4px] w-[100%]">
              <Img
                src="images/img_placeholder.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                alt="placeholder"
              />
              <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[66%]">
                Black <br />
                Warm Jacket
              </Text>
              <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
            <Column className="items-center pb-[4px] w-[100%]">
              <Img
                src="images/img_placeholder_245X245.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                alt="placeholder One"
              />
              <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[50%]">
                Black
                <br />
                Brief Case
              </Text>
              <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
          </Grid>
          <Column className="bg-gray_50 items-center lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:pb-[32px] xl:pb-[36px] 2xl:pb-[41px] 3xl:pb-[49px] w-[32%]">
            <Img
              src="images/img_placeholder_400X521.png"
              className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] w-[100%]"
              alt="placeholder Two"
            />
            <Text className="font-medium leading-[normal] lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-center text-gray_800 w-[55%]">
              Brown <br />
              Casual Sneaker
            </Text>
            <Text className="font-medium lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_500 w-[auto]">
              $299
            </Text>
            <Button
              className="font-bold lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center w-[38%]"
              size="md"
              variant="FillGray800"
            >
              Add to Cart
            </Button>
          </Column>
          <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-2 lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] w-[32%]">
            <Column className="items-center pb-[4px] w-[100%]">
              <Img
                src="images/img_rectangle39_1.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                alt="RectangleThirtyNine Two"
              />
              <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[66%]">
                Blue Grey <br />
                Warm Jacket
              </Text>
              <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
            <Column className="items-center pb-[4px] w-[100%]">
              <Img
                src="images/img_rectangle39_2.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                alt="RectangleThirtyNine Three"
              />
              <Text className="font-medium leading-[normal] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[55%]">
                Blue Denim <br />
                Jacket
              </Text>
              <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
            <Column className="pb-[4px] w-[100%]">
              <Img
                src="images/img_placeholder_1.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                alt="placeholder Three"
              />
              <Text className="font-medium leading-[normal] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[76%]">
                Modern Classic
                <br />
                Watch
              </Text>
              <Text className="font-medium 3xl:ml-[101px] lg:ml-[65px] xl:ml-[75px] 2xl:ml-[84px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
            <Column className="pb-[4px] w-[100%]">
              <Img
                src="images/img_placeholder_2.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                alt="placeholder Four"
              />
              <Text className="font-medium leading-[normal] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[71%]">
                Casual <br />
                Classic Watch
              </Text>
              <Text className="font-medium lg:ml-[61px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[95px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
          </Grid>
        </Row>
        <Stack className="lg:h-[249px] xl:h-[285px] 2xl:h-[320px] 3xl:h-[384px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]">
          <Column className="absolute left-[2%] top-[8%] w-[12%]">
            <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
              New Arrival
            </Text>
            <Text className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[100%]">
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </Column>
          <Stack className="absolute lg:h-[249px] xl:h-[285px] 2xl:h-[320px] 3xl:h-[384px] w-[100%]">
            <div className="absolute bg-gray_800 lg:h-[249px] xl:h-[285px] 2xl:h-[320px] 3xl:h-[384px] left-[0] w-[24%]"></div>
            <Row className="absolute h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[0] w-[83%]">
              <List
                className="lg:gap-[15px] xl:gap-[17px] 2xl:gap-[19px] 3xl:gap-[23px] grid grid-cols-2 min-h-[auto] w-[49%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 items-center lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[33px] shadow-bs w-[100%]">
                  <Img
                    src="images/img_blackbusiness.png"
                    className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
                    alt="blackbusiness"
                  />
                  <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                    Black Briefcase
                  </Text>
                  <Text className="font-medium mb-[4px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    $299
                  </Text>
                </Column>
                <Column className="bg-white_A700 items-center lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[33px] shadow-bs w-[100%]">
                  <Img
                    src="images/img_pink3tz3pbb1.png"
                    className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
                    alt="pink3TZ3PBBOne"
                  />
                  <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                    Pink Shirt
                  </Text>
                  <Text className="font-medium mb-[4px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    $299
                  </Text>
                </Column>
              </List>
              <List
                className="lg:gap-[15px] xl:gap-[17px] 2xl:gap-[19px] 3xl:gap-[23px] grid grid-cols-2 min-h-[auto] w-[49%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 items-center mb-[1px] lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[33px] shadow-bs w-[100%]">
                  <Img
                    src="images/img_graytshirtis.png"
                    className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
                    alt="graytshirtis"
                  />
                  <Text className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                    Gray T-shirt
                  </Text>
                  <Text className="font-medium mb-[4px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    $299
                  </Text>
                </Column>
                <Column className="bg-white_A700 items-center mt-[1px] lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[33px] shadow-bs w-[100%]">
                  <Img
                    src="images/img_redcheckereds.png"
                    className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
                    alt="redcheckereds"
                  />
                  <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                    Red Flannel
                  </Text>
                  <Text className="font-medium mb-[4px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                    $299
                  </Text>
                </Column>
              </List>
            </Row>
          </Stack>
        </Stack>
        <Row className="items-center lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]">
          <Column
            className="bg-cover bg-repeat lg:p-[47px] xl:p-[54px] 2xl:p-[61px] 3xl:p-[73px] w-[49%]"
            style={{ backgroundImage: "url('images/img_02.png')" }}
          >
            <Text className="font-normal leading-[normal] lg:my-[41px] xl:my-[47px] 2xl:my-[53px] 3xl:my-[63px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-white_A700 w-[36%]">
              <span className="text-white_A700 font-poppins">
                Casual
                <br />
              </span>
              <span className="text-white_A700 font-playfairdisplay font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                Collection
              </span>
            </Text>
          </Column>
          <Column
            className="bg-cover bg-repeat lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:p-[46px] xl:p-[52px] 2xl:p-[59px] 3xl:p-[71px] w-[49%]"
            style={{ backgroundImage: "url('images/img_03.png')" }}
          >
            <Text className="font-normal leading-[normal] lg:mb-[36px] xl:mb-[41px] 2xl:mb-[46px] 3xl:mb-[55px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[76px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-white_A700 w-[35%]">
              <span className="text-white_A700 font-poppins">
                Big Vibe <br />
              </span>
              <span className="text-white_A700 font-playfairdisplay font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                Collection
              </span>
            </Text>
          </Column>
        </Row>
        <Stack className="lg:h-[212px] xl:h-[242px] 2xl:h-[272px] 3xl:h-[326px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="absolute bg-gray_800 lg:p-[36px] xl:p-[42px] 2xl:p-[47px] 3xl:p-[56px] top-[0] w-[100%]">
            <Text className="font-bold xl:mb-[105px] 2xl:mb-[118px] 3xl:mb-[142px] lg:mb-[92px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
              Why Choose Us
            </Text>
          </Column>
          <Row className="absolute bottom-[0] inset-x-[0] items-center mx-[auto] w-[85%]">
            <Row className="bg-white_A700 items-center justify-end lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] shadow-bs1 w-[24%]">
              <Img
                src="images/img_music.svg"
                className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[16%]"
                alt="music"
              />
              <Column className="xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[15px] lg:mb-[9px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[72%]">
                <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                  Free Delivery
                </Text>
                <Text className="font-normal leading-[normal] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[100%]">
                  This free shipping
                  <br />
                  only for selected region
                </Text>
              </Column>
            </Row>
            <Row className="bg-white_A700 items-center justify-end lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] shadow-bs1 w-[24%]">
              <Img
                src="images/img_computer.svg"
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[15%]"
                alt="computer"
              />
              <Column className="xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[15px] lg:mb-[9px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[72%]">
                <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                  Payment Method
                </Text>
                <Text className="font-normal leading-[normal] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[100%]">
                  This free shipping
                  <br />
                  only for selected region
                </Text>
              </Column>
            </Row>
            <Row className="bg-white_A700 items-center justify-end lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] shadow-bs1 w-[24%]">
              <Img
                src="images/img_clock.svg"
                className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[42px] w-[11%]"
                alt="clock"
              />
              <Column className="xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[15px] lg:mb-[9px] lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[72%]">
                <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                  Warranty
                </Text>
                <Text className="font-normal leading-[normal] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[100%]">
                  This free shipping
                  <br />
                  only for selected region
                </Text>
              </Column>
            </Row>
            <Row className="bg-white_A700 items-center justify-end lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] shadow-bs1 w-[24%]">
              <Img
                src="images/img_music_45X38.svg"
                className="lg:h-[27px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] w-[13%]"
                alt="music One"
              />
              <Column className="xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[15px] lg:mb-[9px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[72%]">
                <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                  Customer Support{" "}
                </Text>
                <Text className="font-normal leading-[normal] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[100%]">
                  This free shipping
                  <br />
                  only for selected region
                </Text>
              </Column>
            </Row>
          </Row>
        </Stack>
        <Row className="items-center justify-between lg:mt-[64px] xl:mt-[74px] 2xl:mt-[83px] 3xl:mt-[99px] w-[85%]">
          <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
            Popular this Week
          </Text>
          <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
            View all
          </Text>
        </Row>
        <List
          className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-6 min-h-[auto] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[85%]"
          orientation="horizontal"
        >
          <Column className="items-center pb-[4px] w-[100%]">
            <Img
              src="images/img_placeholder_245X245.png"
              className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
              alt="placeholder Five"
            />
            <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[81%]">
              Black Adventure
              <br />
              Boots
            </Text>
            <RatingBar
              className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px]"
              value={4}
              starCount={5}
              color="var(--gray_50)"
              activeColor="var(--yellow_400)"
              size={((window.innerWidth - 15) * 16) / 1920}
            ></RatingBar>
            <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
          <Column className="items-center pb-[4px] w-[100%]">
            <Img
              src="images/img_placeholder.png"
              className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
              alt="placeholder Six"
            />
            <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[64%]">
              Black Formal
              <br />
              Highheels
            </Text>
            <RatingBar
              className="lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px]"
              value={4}
              starCount={5}
              color="var(--gray_50)"
              activeColor="var(--yellow_400)"
              size={((window.innerWidth - 15) * 16) / 1920}
            ></RatingBar>
            <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
          <Column className="items-center pb-[4px] w-[100%]">
            <Img
              src="images/img_placeholder_2.png"
              className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
              alt="placeholder Seven"
            />
            <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[68%]">
              Brown <br />
              Casual Shoes
            </Text>
            <RatingBar
              className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px]"
              value={4}
              starCount={5}
              color="var(--gray_50)"
              activeColor="var(--yellow_400)"
              size={((window.innerWidth - 15) * 16) / 1920}
            ></RatingBar>
            <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
          <Column className="pb-[4px] w-[100%]">
            <Img
              src="images/img_placeholder_3.png"
              className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
              alt="placeholder Eight"
            />
            <Text className="font-medium leading-[normal] lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[52%]">
              Gray <br />
              Longpants
            </Text>
            <RatingBar
              className="lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px]"
              value={4}
              starCount={5}
              color="var(--gray_50)"
              activeColor="var(--yellow_400)"
              size={((window.innerWidth - 15) * 16) / 1920}
            ></RatingBar>
            <Text className="font-medium lg:ml-[53px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
          <Column className="items-center pb-[4px] w-[100%]">
            <Img
              src="images/img_placeholder_1.png"
              className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
              alt="placeholder Nine"
            />
            <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[62%]">
              Green
              <br />
              Sport Jacket
            </Text>
            <RatingBar
              className="lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px]"
              value={4}
              starCount={5}
              color="var(--gray_50)"
              activeColor="var(--yellow_400)"
              size={((window.innerWidth - 15) * 16) / 1920}
            ></RatingBar>
            <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
          <Column className="items-center pb-[4px] w-[100%]">
            <Img
              src="images/img_placeholder_4.png"
              className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
              alt="placeholder Ten"
            />
            <Text className="font-medium leading-[normal] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[55%]">
              Blue Denim <br />
              Skirt
            </Text>
            <RatingBar
              className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px]"
              value={4}
              starCount={5}
              color="var(--gray_50)"
              activeColor="var(--yellow_400)"
              size={((window.innerWidth - 15) * 16) / 1920}
            ></RatingBar>
            <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
        </List>
        <Img
          src="images/img_brand.svg"
          className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[50%]"
          alt="brand"
        />
        <footer className="bg-gray_800 lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="items-center lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mx-[auto] pt-[4px] w-[85%]">
            <Row className="justify-evenly w-[100%]">
              <Column className="mt-[1px] w-[25%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Contacts
                </Text>
                <Row className="ml-[1px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[35%]">
                  <Img
                    src="images/img_call.svg"
                    className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                    alt="call"
                  />
                  <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                    +1234567890
                  </Text>
                </Row>
                <Row className="ml-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[50%]">
                  <Img
                    src="images/img_mail.svg"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] w-[10%]"
                    alt="mail"
                  />
                  <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                    elliye@support.com
                  </Text>
                </Row>
                <Text className="font-bold lg:mt-[33px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Social Media
                </Text>
                <Img
                  src="images/img_sosmedia.svg"
                  className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] ml-[2px] lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] w-[28%]"
                  alt="sosmedia"
                />
              </Column>
              <Column className="w-[26%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Product Links
                </Text>
                <Text className="font-normal lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Categories
                </Text>
                <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  New Arrival
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Features
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Collections
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Discount
                </Text>
                <Text className="font-normal lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Special Offer
                </Text>
              </Column>
              <Column className="mt-[4px] pb-[4px] pr-[4px] w-[25%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Company
                </Text>
                <Text className="font-normal lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  About
                </Text>
                <Text className="font-normal lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Blog
                </Text>
                <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Careers
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Services
                </Text>
                <Text className="font-normal lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Privacy Policy
                </Text>
                <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Terms of service
                </Text>
              </Column>
              <Column className="w-[24%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Join our Newsletter
                </Text>
                <Text className="font-normal leading-[normal] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[87%]">
                  Drop your email below to get update, promotions, coupons, and
                  more!
                </Text>
                <Row className="bg-gray_800 border border-solid border-white_A700 items-center justify-between lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[21px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100_87 tracking-ls1 w-[auto]">
                    Enter your email
                  </Text>
                  <Stack className="bg-white_A700 lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:px-[12px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[18px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]">
                    <Img
                      src="images/img_menu.svg"
                      className="absolute lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] inset-[0] justify-center m-[auto] w-[30%]"
                      alt="menu"
                    />
                  </Stack>
                </Row>
              </Column>
            </Row>
            <Text className="font-normal lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-bluegray_100 w-[auto]">
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default HomepageVThreePage;
