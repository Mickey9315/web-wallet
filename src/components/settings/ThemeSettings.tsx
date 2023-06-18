// import ThemeContrast from './ThemeContrast';
// import ThemeRtlLayout from './ThemeRtlLayout';
// import SettingsDrawer from './drawer';
import ThemeColorPresets from './ThemeColorPresets';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeSettings({ children }: Props) {
  return <ThemeColorPresets>{children}</ThemeColorPresets>;
}
