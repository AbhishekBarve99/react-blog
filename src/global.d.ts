// import '@testing-library/jest-dom/extend-expect';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.svg';

// import { GridRows, GridColumns } from '@vx/grid';
// import { Text } from '@vx/text';
// import { LinearGradient } from '@vx/gradient';
// import { withTooltip, Tooltip } from '@vx/tooltip';

declare module '@vx/group';
declare module '@vx/point';
declare module '@vx/axis';
declare module '@vx/shape';
declare module '@vx/scale';
declare module '@vx/grid';
declare module '@vx/text';
declare module '@vx/gradient';
declare module '@vx/tooltip';
declare module '@vx/curve';
declare module '@vx/mock-data';
declare module 'd3-time-format';
declare module '@vx/pattern';
interface Chrome {
  webstore: any;
}

interface Opr {
  addons: any;
}

interface Safari {
  pushNotification: any;
}

interface Window {
  chrome: Chrome;
  opera: any;
  opr: Opr;
  safari: Safari;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
}

interface Document {
  documentMode: any;
}

declare const InstallTrigger: any;

// VX barstack
interface Bar {
  index: number;
  x: number;
  y: number;
  height: number;
  width: number;
  color: string;
}

interface BarStack {
  bars: Bar[];
  index: number;
}

type ObjectValues<T> = T[keyof T]
