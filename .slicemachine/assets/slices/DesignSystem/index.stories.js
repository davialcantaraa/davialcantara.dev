import MyComponent from '../../../../slices/DesignSystem';

export default {
  title: 'slices/DesignSystem',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'design_system',
      items: [],
      primary: {
        title: [
          {
            type: 'heading1',
            text: 'Productize clicks-and-mortar e-markets',
            spans: [],
          },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Velit ut tempor ut ex sunt exercitation aliqua est reprehenderit est dolor. Minim Lorem incididunt elit aliquip.',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
