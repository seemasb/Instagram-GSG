import Items from '../MenuItem/Items';
import Logo from '../Logo/Logo';
import './Container.css';

export default function Container(props) {
  return (
    <div id="container">
      <Logo />
      <Items />
    </div>
  );
}
