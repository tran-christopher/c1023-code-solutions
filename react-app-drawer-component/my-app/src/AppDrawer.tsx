import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './AppDrawer.css';
export type MenuItem = string;
type Props = {
  header: string;
  items: MenuItem[];
  onSelect: (item: MenuItem) => void;
};
export function AppDrawer({ header, items, onSelect }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  function handleSelect(item: MenuItem): void {
    setIsOpen(false);
    onSelect(item);
  }
  return (
    <div>
      <Menu
        isOpen={isOpen}
        header={header}
        items={items}
        onOpen={() => setIsOpen(true)}
        onSelect={handleSelect}
      />
      <Shade isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </div>
  );
}
type MenuProps = {
  isOpen: boolean;
  header: string;
  items: MenuItem[];
  onOpen: () => void;
  onSelect: (item: MenuItem) => void;
};
function Menu({ isOpen, header, items, onOpen, onSelect }: MenuProps) {
  if (!isOpen) {
    return <FaBars onClick={onOpen} className="menu-icon" />;
  }
  return (
    <div className={`menu-drawer ${isOpen ? 'is-open' : ''}`}>
      <h2 className="menu-heading">{header}</h2>
      <ul className="menu-items">
        {items.map((item, index) => (
          <li key={index} onClick={() => onSelect(item)} className="menu-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
type ShadeProps = {
  isOpen: boolean;
  onClick: () => void;
};
function Shade({ isOpen, onClick }: ShadeProps) {
  return (
    <div
      onClick={onClick}
      className={`menu-shade ${isOpen ? 'is-drawn' : ''}`}></div>
  );
}
