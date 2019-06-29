import Navbar from '../Navbar';

describe('Navbar component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it('Should render navbar without errors', () => {
    const navbar = findByTestAttr(wrapper, 'navbar');
    expect(navbar.length).toBe(1);
  });

  it('Should render nav span without errors', () => {
    const navSpan = findByTestAttr(wrapper, 'navbarSpan');
    expect(navSpan.length).toBe(1);
  });
});
