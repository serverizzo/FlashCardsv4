import { render } from '@testing-library/react-native';

import HomeScreen, { CustomText } from '@/app/(tabs)/index';

describe('<HomeScreen />', () => {
  test('Text renders correctly on HomeScreen', () => {
    const { getByText } = render(<HomeScreen />);

    getByText('Welcome!');
  });

  test('CustomText renders correctly', () => {
    const tree = render(<CustomText>Some text</CustomText>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});