// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Link, LinkProps } from '@mui/material';

const StyledLink = styled(Link)({
  color: 'inherit',
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'none',
  },
});

type Props = {
  children: React.ReactNode;
  component?: React.ElementType;
} & LinkProps;

const CustomLink = ({ children, ...other }: Props) => (
  <StyledLink component={NextLink} {...other}>
    {children}
  </StyledLink>
);

export default CustomLink;
