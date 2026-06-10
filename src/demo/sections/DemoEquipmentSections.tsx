// [PROTOCOL]: Change this header when equipment showcase sections change, then check CLAUDE.md.
// INPUT: Equipment row, character stat, affinity data, and public visual primitives.
// OUTPUT: Bright equipment-room and character-sheet demo sections.
// POS: Demo section group; isolates the largest equipment composition from App.tsx.
import {
  CharacterPortrait,
  FloatingStatusBar,
  GameIcon,
  LevelInfo,
  OrbGem,
  OrbSocketRail,
  PartyMenuShell,
} from '../../index';
import type { OrbSocket } from '../../index';
import { LOCAL_PORTRAIT_SRC } from '../localDemoAssets';
import { affinityRows, characterStats, equipmentRows } from '../demoData';

export const DemoEquipmentSections = () => (
  <>
  <div className="demo-bright-room" aria-label="Equipment Screen surface">
    <span className="demo-bright-room__corner demo-bright-room__corner--tl" aria-hidden="true" />
    <span className="demo-bright-room__corner demo-bright-room__corner--tr" aria-hidden="true" />
    <span className="demo-bright-room__corner demo-bright-room__corner--bl" aria-hidden="true" />
    <span className="demo-bright-room__corner demo-bright-room__corner--br" aria-hidden="true" />
    <span className="demo-bright-room__rule demo-bright-room__rule--top" aria-hidden="true" />
    <span className="demo-bright-room__rule demo-bright-room__rule--bottom" aria-hidden="true" />
    <span className="demo-bright-room__sidetag demo-bright-room__sidetag--left" aria-hidden="true">Party</span>
    <span className="demo-bright-room__sidetag demo-bright-room__sidetag--right" aria-hidden="true">Cloud<i>Strife</i></span>
    <div className="demo-bright-room__hudtop" aria-hidden="true">
      <span className="demo-bright-room__hud-trig">L2</span>
      <span className="demo-bright-room__hud-arrow">«</span>
      <span className="demo-bright-room__hud-current">Cloud</span>
      <span className="demo-bright-room__hud-arrow">»</span>
      <span className="demo-bright-room__hud-trig">R2</span>
    </div>

  <PartyMenuShell
    title={undefined}
    subtitle={undefined}
    aria-label="Equipment Screen demo"
    className="demo-equipment-shell"
    navigation={{
      title: undefined,
      ariaLabel: 'Party roster',
      content: (
        <ul className="demo-equip-roster">
          <li className="demo-equip-roster__row demo-equip-roster__row--selected">
            <span className="demo-equip-roster__name">Cloud</span>
            <span className="demo-equip-roster__leader" aria-label="Leader">
              Leader
            </span>
          </li>
        </ul>
      ),
    }}
    primary={[
      {
        title: 'Equipment',
        variant: 'status',
        ariaLabel: 'Equipped gear',
        content: (
          <div className="demo-equip-stack">
            {equipmentRows.map((row) => (
              <article key={row.id} className="demo-equip-row">
                <span className="demo-equip-icon" aria-hidden="true">
                  <GameIcon name={row.icon} size="md" />
                </span>
                <div className="demo-equip-body">
                  <header className="demo-equip-head">
                    <h4 className="demo-equip-name">{row.name}</h4>
                    {row.slots ? (
                      <span className="demo-equip-rail">
                        <OrbSocketRail
                          size="md"
                          backdrop={false}
                          ariaLabel={`${row.name} sockets`}
                          sockets={row.slots.map((slot) => ({
                            id: slot.id,
                            tone: slot.empty ? 'empty' : (slot.tone as OrbSocket['tone']) ?? 'cyan',
                            linkedAfter: slot.linkedAfter ? 'short' : undefined,
                          }))}
                        />
                        {row.trailingOrb ? (
                          <span className="demo-equip-trailing">
                            <OrbGem tone={row.trailingOrb.tone ?? 'cyan'} size="sm" />
                          </span>
                        ) : null}
                      </span>
                    ) : null}
                  </header>
                  <div className="demo-equip-stats">
                    {row.stats.map((stat, index) => (
                      <span key={index} className="demo-equip-stat">
                        <GameIcon name={stat.icon} size="sm" />
                        <b>{stat.value}</b>
                      </span>
                    ))}
                  </div>
                  <p className="demo-equip-desc">{row.description}</p>
                </div>
              </article>
            ))}
          </div>
        ),
      },
      {
        title: 'Attributes',
        ariaLabel: 'Attribute summary',
        content: (
          <div className="demo-attr-grid">
            <ul className="demo-attr-list">
              {characterStats.map((stat) => (
                <li key={stat.label} className="demo-attr-row">
                  <span className="demo-attr-label">
                    <GameIcon name={stat.icon} size="sm" />
                    <span>{stat.label}</span>
                  </span>
                  <strong className="demo-attr-value">{stat.value}</strong>
                </li>
              ))}
            </ul>
            <div className="demo-affinity">
              <h5 className="demo-affinity-title">Affinities</h5>
              <h6 className="demo-affinity-sub">Resistances</h6>
              <ul className="demo-affinity-list">
                {affinityRows.map((row) => (
                  <li
                    key={row.label}
                    className={`demo-affinity-row${row.selected ? ' demo-affinity-row--selected' : ''}`}
                  >
                    {row.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ),
      },
    ]}
    detail={{
      title: 'Cloud Strife',
      ariaLabel: 'Character profile',
      content: (
        <div className="demo-character-pane">
          {LOCAL_PORTRAIT_SRC ? (
            <img
              src={LOCAL_PORTRAIT_SRC}
              alt="Authorized portrait"
              className="demo-character-portrait-img"
              aria-hidden="true"
            />
          ) : (
            <CharacterPortrait
              size="lg"
              label={undefined}
              className="demo-character-portrait"
            />
          )}
          <LevelInfo
            level={13}
            exp={1139}
            maxExp={1199}
            weaponLevel="Weapon Level 2"
            resources={[
              { label: 'HP', value: 1310, max: 1720 },
              { label: 'MP', value: 13, max: 39 },
              { label: 'SP', value: 7, max: 10 },
            ]}
          />
        </div>
      ),
    }}
    footer={
      <FloatingStatusBar
        playtime="005:38:46"
        currency="2,468"
        hint="Select a character whose attributes you wish to view."
        actionLabel="Toggle Page"
      />
    }
  />
  </div>
  </>
);
