'use client'

import { useState } from 'react'

interface Props {
  description: string
  ingredients: string
  howToUse: string[]
}

const TABS = ['Description', 'Ingredients', 'How to use'] as const
type Tab = typeof TABS[number]

export default function ProductTabs({ description, ingredients, howToUse }: Props) {
  const [active, setActive] = useState<Tab>('Description')

  return (
    <div className="pdp-tabs-wrap">
      <div className="wrap" style={{ padding: 0 }}>
        <div className="pdp-tab-nav">
          {TABS.map(t => (
            <button
              key={t}
              className={`pdp-tab-btn${active === t ? ' active' : ''}`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="wrap">
        {active === 'Description' && (
          <div className="pdp-tab-content">
            <p>{description}</p>
          </div>
        )}
        {active === 'Ingredients' && (
          <div className="pdp-tab-content">
            <p className="pdp-ing">{ingredients}</p>
          </div>
        )}
        {active === 'How to use' && (
          <div className="pdp-tab-content">
            <ol className="pdp-steps">
              {howToUse.map((step, i) => <li key={i}>{step}</li>)}
            </ol>
          </div>
        )}
      </div>
    </div>
  )
}
