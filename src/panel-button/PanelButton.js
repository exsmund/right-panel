import './PanelButton.scss';

function PanelButton({ label, icon, onClick, active }) {
  return (
    <div
      onClick={onClick}
      className={'PanelButton' + (active ? ' PanelButton__checked' : '')}
    >
      <div className="PanelButton-icon">
        <img src={icon} alt={label} />
      </div>
      <div className="PanelButton-label">{label}</div>
      <div className="PanelButton-hint">{label}</div>
    </div>
  );
}

export default PanelButton;
