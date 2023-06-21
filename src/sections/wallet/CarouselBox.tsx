import { useRef } from 'react';
// @mui
import { Box, Stack } from '@mui/material';
// components
import Carousel, { CarouselDots } from 'src/components/carousel';
import CustomTypography from 'src/components/custom-typography/CustomTypography';
import Image from 'src/components/image/Image';
import { ICON } from 'src/config-global';
import Iconify from 'src/components/iconify/Iconify';
import CustomLink from 'src/components/custom-link/CustomLink';
import AddressBox from 'src/components/address-box/AddressBox';
import { PATH_WALLET } from 'src/routes/paths';

// ----------------------------------------------------------------------

export default function CarouselBox() {
  const carouselRef = useRef<Carousel | null>(null);

  const carouselSettings = {
    dots: true,
    arrows: false,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...CarouselDots({
      rounded: true,
      sx: { mt: 1 },
    }),
  };

  return (
    <Box
      sx={{
        '& .slick-list': { boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '5px' },
      }}
    >
      <Carousel ref={carouselRef} {...carouselSettings}>
        <CarouselItem bg="/assets/images/backgrounds/bg_wisdom_pattern.png" bgcolor="#F0EBFF">
          <Stack direction="row" spacing={1.25} justifyContent="center" alignItems="center">
            <Image
              src="/assets/icons/wallets/ic_wisdom_50.svg"
              sx={{ width: ICON.SIZE.xl, height: ICON.SIZE.xl }}
            />
            <Box position="relative">
              <CustomTypography size="xxl">500</CustomTypography>
              <CustomTypography size="xxs" position="absolute" top="55px" left="2px">
                WISDOM
              </CustomTypography>
            </Box>
          </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width={1}>
            <CustomLink href={PATH_WALLET.dashboard}>
              <Stack spacing={1} alignItems="center" sx={{ '&:hover': { cursor: 'pointer' } }}>
                <Image
                  src="/assets/icons/wallets/ic_wisdom_40_grey.svg"
                  sx={{ width: ICON.SIZE.lg, height: ICON.SIZE.lg }}
                />
                <CustomTypography size="xs">Deposit</CustomTypography>
              </Stack>
            </CustomLink>
            <CustomLink href={PATH_WALLET.dashboard}>
              <Stack spacing={1} alignItems="center">
                <Image
                  src="/assets/icons/wallets/ic_wis_40_grey.svg"
                  sx={{ width: ICON.SIZE.lg, height: ICON.SIZE.lg }}
                />
                <CustomTypography size="xs">To WIS</CustomTypography>
              </Stack>
            </CustomLink>
            <CustomLink href={PATH_WALLET.toFriend}>
              <Stack spacing={1} alignItems="center">
                <Image
                  src="/assets/icons/wallets/ic_to_friends_40.svg"
                  sx={{ width: ICON.SIZE.lg, height: ICON.SIZE.lg }}
                />
                <CustomTypography size="xs">To Friends</CustomTypography>
              </Stack>
            </CustomLink>
          </Stack>
        </CarouselItem>
        <CarouselItem bg="/assets/images/backgrounds/bg_wis_pattern.png" bgcolor="#FFB21A4D">
          <Stack direction="row" spacing={1.25} justifyContent="center" alignItems="center">
            <Image
              src="/assets/icons/wallets/ic_wis_50.svg"
              sx={{ width: ICON.SIZE.xl, height: ICON.SIZE.xl }}
            />
            <Box position="relative">
              <CustomTypography size="xxl">500</CustomTypography>
              <CustomTypography size="xxs" position="absolute" top="55px" left="2px">
                WIS
              </CustomTypography>
            </Box>
            <Box position="absolute" top="75px">
              <AddressBox address="0xf253fc2ca ... ... 49892172" />
            </Box>
          </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width={1}>
            <CustomLink href={PATH_WALLET.dashboard}>
              <Stack spacing={1} alignItems="center">
                <Image
                  src="/assets/icons/wallets/ic_wis_40_grey.svg"
                  sx={{ width: ICON.SIZE.lg, height: ICON.SIZE.lg }}
                />
                <CustomTypography size="xs">Deposit</CustomTypography>
              </Stack>
            </CustomLink>
            <CustomLink href={PATH_WALLET.dashboard}>
              <Stack spacing={1} alignItems="center">
                <Image
                  src="/assets/icons/wallets/ic_wisdom_40_grey.svg"
                  sx={{ width: ICON.SIZE.lg, height: ICON.SIZE.lg }}
                />
                <CustomTypography size="xs">To WISDOM</CustomTypography>
              </Stack>
            </CustomLink>
            <CustomLink href={PATH_WALLET.dashboard}>
              <Stack spacing={1} alignItems="center">
                <Image
                  src="/assets/icons/wallets/ic_matic_40_grey.svg"
                  sx={{ width: ICON.SIZE.lg, height: ICON.SIZE.lg }}
                />
                <CustomTypography size="xs">To External</CustomTypography>
              </Stack>
            </CustomLink>
          </Stack>
        </CarouselItem>
        <CarouselItem bg="/assets/images/backgrounds/bg_matic_pattern.png" bgcolor="#FFFFFF">
          <Stack direction="row" spacing={1.25} justifyContent="center" alignItems="center">
            <Image
              src="/assets/icons/wallets/ic_matic_50.svg"
              sx={{ width: ICON.SIZE.xl, height: ICON.SIZE.xl }}
            />
            <Box position="relative">
              <CustomTypography size="xxl">500</CustomTypography>
              <CustomTypography size="xxs" position="absolute" top="55px" left="2px">
                MATIC
              </CustomTypography>
            </Box>
            <Box position="absolute" top="75px">
              <AddressBox address="0xf253fc2ca ... ... 49892172" />
            </Box>
          </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width={1}>
            <CustomLink href={PATH_WALLET.dashboard}>
              <Stack spacing={1} alignItems="center">
                <Image
                  src="/assets/icons/wallets/ic_deposit.svg"
                  sx={{ width: ICON.SIZE.lg, height: ICON.SIZE.lg }}
                />
                <CustomTypography size="xs">Deposit</CustomTypography>
              </Stack>
            </CustomLink>
            <CustomLink href={PATH_WALLET.dashboard}>
              <Stack spacing={1} alignItems="center">
                <Image
                  src="/assets/icons/wallets/ic_withdraw.svg"
                  sx={{ width: ICON.SIZE.lg, height: ICON.SIZE.lg }}
                />
                <CustomTypography size="xs">Widthdraw</CustomTypography>
              </Stack>
            </CustomLink>
          </Stack>
        </CarouselItem>
      </Carousel>
    </Box>
  );
}

type CarouselItemProps = {
  bg: string;
  bgcolor: string;
  children: React.ReactNode;
};

function CarouselItem({ bg, bgcolor, children }: CarouselItemProps) {
  return (
    <Box position="relative" bgcolor={bgcolor} p="14px 56px 17px 56px">
      <Box
        component="img"
        src={bg}
        sx={{ position: 'absolute', top: 0, left: 0, width: 1, height: 1 }}
      />
      <Iconify
        position="absolute"
        top="12px"
        right="10px"
        icon="system-uicons:refresh"
        sx={{
          width: 18,
          height: 18,
          color: '#828282',
          transform: 'rotate(60deg)',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            cursor: 'pointer',
            transform: 'rotate(90deg)',
          },
        }}
      />
      <Stack justifyContent="space-between" alignItems="center" spacing={8.25} position="relative">
        {children}
      </Stack>
    </Box>
  );
}
