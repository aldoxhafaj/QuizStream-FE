import {
  HorizontalSpacing,
  VerticalSpacing,
} from '@quiz-stream/themes/spacing';

export type LayoutInsetProps = {
  padding?: HorizontalSpacing;
  paddingTop?: VerticalSpacing;
  paddingBottom?: VerticalSpacing;
  paddingRight?: HorizontalSpacing;
  paddingLeft?: HorizontalSpacing;
  paddingHorizontal?: HorizontalSpacing;
  paddingVertical?: VerticalSpacing;
  margin?: HorizontalSpacing;
  marginTop?: VerticalSpacing;
  marginBottom?: VerticalSpacing;
  marginRight?: HorizontalSpacing;
  marginLeft?: HorizontalSpacing;
  marginHorizontal?: HorizontalSpacing;
  marginVertical?: VerticalSpacing;
};

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export type AlignItem = 'center' | 'flex-start' | 'flex-end';

export type ResizeMode = 'cover' | 'contain';
