import { useEffect, useRef, useState } from 'react';
import './Panel.scss';
import chat from './chat.svg'
import eye from './eye.svg'
import PanelButton from '../panel-button/PanelButton';
import Chat from "../chat/Chat"
import ToolsPanel from '../tools-panel/ToolsPanel';
import ViewPanel from '../view-panel/ViewPanel';

const panels = [
  {
    icon: eye,
    label: 'Просмотр чего-нибудь как-нибудь',
    component: ViewPanel,
  },
  {
    icon: chat,
    label: 'Чат',
    component: Chat,
  },
  {
    icon: eye,
    label: 'Настройки',
    component: ToolsPanel,
  },
]

function Panel() {
  const [panel, setPanel] = useState(null);

  const togglePanel = (val) => {
    setPanel(panel === val ? null : val);
  }

  return (
    <div>
      <div className={'Panel-root' + (panel !== null ? ' Panel__opened' : '')}>
        <div className="Panel-buttons">
          <div className="Panel-buttons-wrapper">
            {
              panels.map((p, i) => (
                <PanelButton
                  key={i}
                  label={p.label}
                  icon={p.icon}
                  onClick={() => togglePanel(i)}
                  active={panel === i}
                />
              ))
            }
          </div>
        </div>
        <div className="Panel-body">
          <div className="Panel-body-wrapper">
            {
              panels.map((p, i) => {
                if (i === panel) {
                  return (
                    <div className="Panel-tab-content">
                      <p.component />
                    </div>
                  );
                }
                return null;
              })
            }
          </div>
        </div>

      </div>

      <div
        className={'Panel-shadow' + (panel !== null ? ' Panel-shadow__opened' : '')}
        onClick={() => setPanel(null)}
      ></div>
    </div>
  );
}

export default Panel;
