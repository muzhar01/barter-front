import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Button,
  Line,
  Slider,
  PagerIndicator,
  Grid,
  List,
  RatingBar,
} from "components";

const HomepageVTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/home1");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-poppins items-center mx-[auto] w-[100%]"
        onClick={handleNavigate6}
      >
        <header className="w-[100%]">
          <Column className="bg-white_A700 items-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[100%]">
            <Row className="items-center w-[87%]">
              <Img
                src="images/img_volume.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[2%]"
                alt="volume"
              />
              <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Elliye{" "}
              </Text>
              <Row className="bg-white_A700 border-2 border-gray_50 border-solid items-center justify-center lg:ml-[239px] xl:ml-[274px] 2xl:ml-[308px] 3xl:ml-[370px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] w-[36%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500_87 w-[auto]">
                  Search here
                </Text>
                <Stack className="bg-gray_800 lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[231px] xl:ml-[264px] 2xl:ml-[297px] 3xl:ml-[357px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[8px] xl:px-[9px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]">
                  <Img
                    src="images/img_search.svg"
                    className="absolute lg:h-[11px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] inset-[0] justify-center m-[auto] lg:w-[10px] xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px]"
                    alt="search"
                  />
                </Stack>
              </Row>
              <Img
                src="images/img_car.svg"
                className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:ml-[178px] xl:ml-[204px] 2xl:ml-[229px] 3xl:ml-[275px] w-[5%]"
                alt="car"
              />
              <Button className="font-bold lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[7%]">
                Login
              </Button>
            </Row>
            <Line className="bg-gray_50 h-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[87%]" />
            <Row className="justify-center lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[42%]">
              <Text className="cursor-pointer hover:font-normal font-normal mt-[2px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                Categories
              </Text>
              <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                New Arrival
              </Text>
              <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                Features
              </Text>
              <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                Collections
              </Text>
              <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                Discount
              </Text>
            </Row>
          </Column>
        </header>
        <div className="overflow-auto overflow-x-auto w-[100%]">
          <Stack className="lg:h-[438px] xl:h-[501px] 2xl:h-[563px] 3xl:h-[676px] w-[100%]">
            <Stack className="absolute lg:h-[438px] xl:h-[501px] 2xl:h-[563px] 3xl:h-[676px] w-[100%]">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                paddingRight={26}
                slidesToShow={1}
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                activeSlideCSS="scale-[1.00] absolute"
                ref={sliderRef}
                className="absolute w-[100%]"
                items={[...Array(12)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <Column
                      className="bg-cover bg-repeat items-center w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group304.png')",
                      }}
                    >
                      <Column className="bg-black_900_68 justify-end lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]">
                        <Text className="font-medium font-poppins 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] lg:mt-[52px] xl:mt-[60px] 2xl:mt-[67px] 3xl:mt-[81px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                          50% Off Limited Offer
                        </Text>
                        <Text className="font-bold font-playfairdisplay leading-[100.00%] 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] 3xl:text-[115px] lg:text-[74px] xl:text-[85px] 2xl:text-[96px] text-white_A700 w-[32%]">
                          Summer <br />
                          Collection
                        </Text>
                        <Row className="bg-gray_800 font-poppins items-center 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] mr-[auto] lg:mt-[51px] xl:mt-[59px] 2xl:mt-[66px] 3xl:mt-[80px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] w-[13%]">
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
                  </React.Fragment>
                ))}
                Indicator={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_800 relative" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700 relative"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <PagerIndicator
                className="absolute bottom-[4%] h-[12px] left-[7%] w-[max-content]"
                count={6}
                activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_800 relative"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700 relative"
                sliderRef={sliderRef}
                selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] xl:mx-[2px]"
                unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] xl:mx-[2px]"
              />
            </Stack>
            <Row className="absolute bottom-[4%] items-center justify-center lg:pr-[102px] xl:pr-[117px] 2xl:pr-[132px] 3xl:pr-[158px] right-[0] shadow-bs w-[59%]">
              <Column className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] items-center lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] lg:w-[93px]">
                <Img
                  src="images/img_call.svg"
                  className="lg:h-[23px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] mt-[4px] lg:w-[22px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                  alt="Vector"
                />
                <Text className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Jacket
                </Text>
              </Column>
              <Column className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] lg:w-[93px]">
                <Img
                  src="images/img_file.svg"
                  className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[41%]"
                  alt="file"
                />
                <Text className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Shirt
                </Text>
              </Column>
              <Column className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] lg:w-[93px]">
                <Img
                  src="images/img_trash.svg"
                  className="lg:h-[23px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] mt-[4px] w-[27%]"
                  alt="trash One"
                />
                <Text className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Pants
                </Text>
              </Column>
              <Column className="bg-gray_800 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] lg:w-[93px]">
                <Img
                  src="images/img_cut.svg"
                  className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[42%]"
                  alt="cut"
                />
                <Text className="font-normal lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  Shoes
                </Text>
              </Column>
              <Column className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] lg:w-[93px]">
                <Img
                  src="images/img_vector_39X28.svg"
                  className="lg:h-[23px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] mt-[4px] w-[30%]"
                  alt="Vector One"
                />
                <Text className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Dress
                </Text>
              </Column>
              <Column className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:px-[18px] xl:px-[20px] 2xl:px-[23px] 3xl:px-[27px] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] lg:w-[93px]">
                <Img
                  src="images/img_globe.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[40%]"
                  alt="globe"
                />
                <Text className="font-normal mb-[3px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Accesories
                </Text>
              </Column>
            </Row>
          </Stack>
        </div>
        <Img
          src="images/img_vector_gray_500.svg"
          className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] 3xl:mt-[103px] lg:mt-[67px] xl:mt-[76px] 2xl:mt-[86px] w-[50%]"
          alt="Vector Two"
        />
        <Row className="items-center 3xl:mt-[103px] lg:mt-[67px] xl:mt-[76px] 2xl:mt-[86px] w-[85%]">
          <Column className="lg:h-[486px] xl:h-[556px] 2xl:h-[625px] 3xl:h-[750px] items-center lg:w-[485px] xl:w-[555px] 2xl:w-[624px] 3xl:w-[749px]">
            <Column
              className="bg-cover bg-repeat lg:p-[47px] xl:p-[54px] 2xl:p-[61px] 3xl:p-[73px] w-[96%]"
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
              className="bg-cover bg-repeat justify-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[52px] xl:p-[60px] 2xl:p-[67px] 3xl:p-[81px] w-[96%]"
              style={{ backgroundImage: "url('images/img_01.png')" }}
            >
              <Text className="font-normal leading-[normal] lg:mb-[34px] xl:mb-[39px] 2xl:mb-[44px] 3xl:mb-[53px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[37%]">
                <span className="text-gray_800 font-poppins">
                  Summer <br />
                </span>
                <span className="text-gray_800 font-playfairdisplay font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                  Collection
                </span>
              </Text>
            </Column>
          </Column>
          <Column
            className="bg-cover bg-repeat lg:p-[46px] xl:p-[52px] 2xl:p-[59px] 3xl:p-[71px] w-[49%]"
            style={{ backgroundImage: "url('images/img_03.png')" }}
          >
            <Text className="font-normal leading-[normal] lg:mb-[200px] xl:mb-[229px] 2xl:mb-[258px] 3xl:mb-[309px] lg:mt-[137px] xl:mt-[157px] 2xl:mt-[177px] 3xl:mt-[212px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-white_A700 w-[35%]">
              <span className="text-white_A700 font-poppins">
                Big Vibe <br />
              </span>
              <span className="text-white_A700 font-playfairdisplay font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                Collection
              </span>
            </Text>
          </Column>
        </Row>
        <Row className="items-center lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] xl:pr-[4px] lg:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] w-[85%]">
          <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
            Featured
          </Text>
          <Text className="font-medium 2xl:ml-[1018px] 3xl:ml-[1222px] lg:ml-[791px] xl:ml-[905px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
            View all
          </Text>
          <Img
            src="images/img_menu.svg"
            className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[1%]"
            alt="menu"
          />
        </Row>
        <Row className="items-center lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[85%]">
          <Column
            className="bg-cover bg-repeat items-center lg:p-[39px] xl:p-[45px] 2xl:p-[51px] 3xl:p-[61px] w-[32%]"
            style={{ backgroundImage: "url('images/img_sidebanner.png')" }}
          >
            <Text className="font-normal leading-[normal] lg:mb-[316px] xl:mb-[361px] 2xl:mb-[406px] 3xl:mb-[488px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-center text-gray_800 w-[83%]">
              <span className="text-gray_800 font-poppins">
                Discover Our <br />
              </span>
              <span className="text-gray_800 font-poppins font-bold">
                Featured Product
              </span>
            </Text>
          </Column>
          <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-4 lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[66%]">
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
                src="images/img_sidebanner.png"
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
                src="images/img_rectangle39_245X245.png"
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
                src="images/img_rectangle39_1.png"
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
            <Column className="items-center pb-[4px] w-[100%]">
              <Img
                src="images/img_rectangle39_2.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                alt="RectangleThirtyNine Four"
              />
              <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[45%]">
                Casual <br />
                Pink Shirt
              </Text>
              <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
            <Column className="items-center pb-[4px] w-[100%]">
              <Img
                src="images/img_rectangle39_3.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                alt="RectangleThirtyNine Five"
              />
              <Text className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Gray T-shirt
              </Text>
              <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
            <Column className="items-center pb-[4px] w-[100%]">
              <Img
                src="images/img_rectangle39_4.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                alt="RectangleThirtyNine Six"
              />
              <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[66%]">
                Purple <br />
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
                alt="RectangleThirtyNine Seven"
              />
              <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Red Flannel
              </Text>
              <Text className="font-medium lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
          </Grid>
        </Row>
        <Stack className="lg:h-[338px] xl:h-[387px] 2xl:h-[435px] 3xl:h-[522px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="absolute bg-gray_800 lg:p-[30px] xl:p-[34px] 2xl:p-[39px] 3xl:p-[46px] top-[0] w-[100%]">
            <Text className="font-bold lg:mb-[158px] xl:mb-[180px] 2xl:mb-[203px] 3xl:mb-[244px] lg:ml-[53px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-white_A700 w-[auto]">
              Limited Offer
            </Text>
          </Column>
          <List
            className="absolute bottom-[0] lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-2 inset-x-[0] min-h-[auto] mx-[auto] w-[85%]"
            orientation="horizontal"
          >
            <Row className="bg-gray_50 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs1 w-[100%]">
              <Column className="items-center w-[44%]">
                <Img
                  src="images/img_rectangle45.png"
                  className="lg:h-[163px] xl:h-[187px] 2xl:h-[210px] 3xl:h-[252px] lg:w-[162px] xl:w-[186px] 2xl:w-[209px] 3xl:w-[251px]"
                  alt="RectangleFortyFive"
                />
                <Button
                  className="font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center w-[61%]"
                  size="lg"
                >
                  Add to Cart
                </Button>
              </Column>
              <Column className="w-[52%]">
                <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                  Limited Deals
                </Text>
                <Row className="items-center justify-between lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                  <Column className="border border-gray_500 border-solid lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center lg:px-[12px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                    <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                      08
                    </Text>
                    <Text className="font-normal lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                      Hours
                    </Text>
                  </Column>
                  <Column className="border border-gray_500 border-solid lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center lg:px-[10px] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                    <Text className="font-medium lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                      58
                    </Text>
                    <Text className="font-normal mb-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                      Minutes
                    </Text>
                  </Column>
                  <Column className="border border-gray_500 border-solid lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center 2xl:px-[10px] 3xl:px-[12px] lg:px-[8px] xl:px-[9px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                    <Text className="flex font-medium items-center lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                      18
                    </Text>
                    <Text className="font-normal lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                      Seconds
                    </Text>
                  </Column>
                </Row>
                <Text className="font-bold lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                  Black Warm Jacket{" "}
                </Text>
                <Row className="items-center lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[36%]">
                  <Text className="font-normal line-through mb-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                    $299
                  </Text>
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                    $199
                  </Text>
                </Row>
              </Column>
            </Row>
            <Row className="bg-gray_50 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs1 w-[100%]">
              <Column className="items-center w-[44%]">
                <Img
                  src="images/img_rectangle45_279X279.png"
                  className="lg:h-[163px] xl:h-[187px] 2xl:h-[210px] 3xl:h-[252px] lg:w-[162px] xl:w-[186px] 2xl:w-[209px] 3xl:w-[251px]"
                  alt="RectangleFortyFive One"
                />
                <Button
                  className="font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center w-[61%]"
                  size="lg"
                >
                  Add to Cart
                </Button>
              </Column>
              <Column className="w-[52%]">
                <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                  Limited Deals
                </Text>
                <Row className="items-center justify-between lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                  <Column className="border border-gray_500 border-solid lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center lg:px-[12px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                    <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                      08
                    </Text>
                    <Text className="font-normal lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                      Hours
                    </Text>
                  </Column>
                  <Column className="border border-gray_500 border-solid lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center lg:px-[10px] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                    <Text className="font-medium lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                      58
                    </Text>
                    <Text className="font-normal mb-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                      Minutes
                    </Text>
                  </Column>
                  <Column className="border border-gray_500 border-solid lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center 2xl:px-[10px] 3xl:px-[12px] lg:px-[8px] xl:px-[9px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                    <Text className="flex font-medium items-center lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                      18
                    </Text>
                    <Text className="font-normal lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                      Seconds
                    </Text>
                  </Column>
                </Row>
                <Text className="font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                  Casual Grey Shoes
                </Text>
                <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[36%]">
                  <Text className="font-normal line-through mb-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                    $399
                  </Text>
                  <Text className="font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                    $199
                  </Text>
                </Row>
              </Column>
            </Row>
          </List>
        </Stack>
        <Row className="items-center lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] xl:pt-[4px] lg:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[85%]">
          <Column className="w-[51%]">
            <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
              New Arrival
            </Text>
            <Column className="items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[94%]">
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="items-center justify-between lg:my-[36px] xl:my-[41px] 2xl:my-[46px] 3xl:my-[56px] w-[100%]">
                  <Img
                    src="images/img_placeholder.png"
                    className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder"
                  />
                  <Column className="w-[36%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                      Checkered Jacket
                    </Text>
                    <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                  <Img
                    src="images/img_placeholder_107X107.png"
                    className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder One"
                  />
                  <Column className="w-[31%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                      Blue Woman Denim
                    </Text>
                    <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                </Row>
                <Row className="items-center lg:mr-[39px] xl:mr-[44px] 2xl:mr-[50px] 3xl:mr-[60px] lg:my-[36px] xl:my-[41px] 2xl:my-[46px] 3xl:my-[56px] w-[91%]">
                  <Img
                    src="images/img_placeholder_1.png"
                    className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder One"
                  />
                  <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[39%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                      Orange Jeans
                    </Text>
                    <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                  <Img
                    src="images/img_placeholder_2.png"
                    className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder One One"
                  />
                  <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[24%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                      Classic Watch
                    </Text>
                    <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                </Row>
              </List>
              <Row className="items-center justify-center lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] lg:pr-[3px] 2xl:pr-[4px] xl:pr-[4px] 3xl:pr-[5px] lg:py-[3px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] w-[14%]">
                <Text className="font-medium mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                  View all
                </Text>
                <Img
                  src="images/img_menu.svg"
                  className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] mr-[1px] w-[17%]"
                  alt="menu One"
                />
              </Row>
            </Column>
          </Column>
          <Column className="w-[49%]">
            <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
              Popular This Week
            </Text>
            <Column className="lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[85%]">
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="items-center justify-between xl:mr-[4px] lg:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] w-[99%]">
                  <Img
                    src="images/img_placeholder_3.png"
                    className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder Two"
                  />
                  <Column className="lg:pr-[2px] 2xl:pr-[3px] xl:pr-[3px] 3xl:pr-[4px] lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] w-[41%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                      Blue Jeans
                    </Text>
                    <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                    <RatingBar
                      className="lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px]"
                      value={4}
                      starCount={5}
                      color="var(--gray_50)"
                      activeColor="var(--yellow_400)"
                      size={((window.innerWidth - 15) * 16) / 1920}
                    ></RatingBar>
                  </Column>
                  <Img
                    src="images/img_placeholder_4.png"
                    className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder One Two"
                  />
                  <Column className="pt-[4px] w-[20%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                      Wristwatch
                    </Text>
                    <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                    <RatingBar
                      className="lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px]"
                      value={4}
                      starCount={5}
                      color="var(--gray_50)"
                      activeColor="var(--yellow_400)"
                      size={((window.innerWidth - 15) * 16) / 1920}
                    ></RatingBar>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] w-[100%]">
                  <Img
                    src="images/img_placeholder_5.png"
                    className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder Three"
                  />
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[41%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                      Elegant Jacket
                    </Text>
                    <Text className="font-medium xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                    <RatingBar
                      className="lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px]"
                      value={4}
                      starCount={5}
                      color="var(--gray_50)"
                      activeColor="var(--yellow_400)"
                      size={((window.innerWidth - 15) * 16) / 1920}
                    ></RatingBar>
                  </Column>
                  <Img
                    src="images/img_rectangle45_279X279.png"
                    className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder One Three"
                  />
                  <Column className="lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[21%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                      Gray Watch
                    </Text>
                    <Text className="font-medium xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                    <RatingBar
                      className="lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px]"
                      value={4}
                      starCount={5}
                      color="var(--gray_50)"
                      activeColor="var(--yellow_400)"
                      size={((window.innerWidth - 15) * 16) / 1920}
                    ></RatingBar>
                  </Column>
                </Row>
              </List>
              <Row className="items-center justify-end ml-[auto] lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] lg:pr-[3px] 2xl:pr-[4px] xl:pr-[4px] 3xl:pr-[5px] lg:py-[3px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] w-[16%]">
                <Text className="font-medium mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                  View all
                </Text>
                <Img
                  src="images/img_menu.svg"
                  className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] mr-[1px] w-[17%]"
                  alt="menu Two"
                />
              </Row>
            </Column>
          </Column>
        </Row>
        <Row className="bg-gray_50 items-center lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] lg:p-[37px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] w-[100%]">
          <Img
            src="images/img_music.svg"
            className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] w-[3%]"
            alt="music"
          />
          <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[17%]">
            <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
              Free Delivery
            </Text>
            <Text className="font-normal leading-[normal] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[69%]">
              This free shipping
              <br />
              only for selected region
            </Text>
          </Column>
          <Img
            src="images/img_computer.svg"
            className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[3%]"
            alt="computer"
          />
          <Column className="lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] w-[17%]">
            <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
              Payment Method
            </Text>
            <Text className="font-normal leading-[normal] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[68%]">
              This free shipping
              <br />
              only for selected region
            </Text>
          </Column>
          <Img
            src="images/img_clock.svg"
            className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[42px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] w-[2%]"
            alt="clock"
          />
          <Column className="lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] w-[17%]">
            <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
              Warranty
            </Text>
            <Text className="font-normal leading-[normal] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[70%]">
              This free shipping
              <br />
              only for selected region
            </Text>
          </Column>
          <Img
            src="images/img_music_45X38.svg"
            className="lg:h-[27px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] w-[2%]"
            alt="music One"
          />
          <Column className="lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] w-[12%]">
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
        <footer className="bg-gray_800 w-[100%]">
          <Column className="items-center lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mx-[auto] w-[85%]">
            <Row className="justify-evenly w-[100%]">
              <Column className="justify-end lg:pr-[2px] 2xl:pr-[3px] xl:pr-[3px] 3xl:pr-[4px] lg:py-[2px] 2xl:py-[3px] xl:py-[3px] 3xl:py-[4px] w-[43%]">
                <Row className="mr-[auto] mt-[1px] w-[16%]">
                  <Img
                    src="images/img_group19.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[35%]"
                    alt="GroupNineteen"
                  />
                  <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                    Elliye{" "}
                  </Text>
                </Row>
                <Text className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[52%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor .
                </Text>
                <Row className="ml-[1px] mr-[auto] lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[21%]">
                  <Img
                    src="images/img_call.svg"
                    className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                    alt="call"
                  />
                  <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                    +1234567890
                  </Text>
                </Row>
                <Row className="ml-[2px] mr-[auto] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[30%]">
                  <Img
                    src="images/img_mail.svg"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] w-[10%]"
                    alt="mail"
                  />
                  <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                    elliye@support.com
                  </Text>
                </Row>
              </Column>
              <Column className="mt-[4px] pb-[4px] pr-[4px] w-[17%]">
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
              </Column>
              <Column className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] pb-[4px] pr-[4px] w-[17%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Company
                </Text>
                <Text className="font-normal lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  About
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Blog
                </Text>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Careers
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Services
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Privacy Policy
                </Text>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Terms of service
                </Text>
              </Column>
              <Column className="mt-[4px] w-[24%]">
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
                      alt="menu Three"
                    />
                  </Stack>
                </Row>
              </Column>
            </Row>
            <Text className="font-normal lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-bluegray_100 w-[auto]">
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default HomepageVTwoPage;
