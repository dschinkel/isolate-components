import { describe, it } from 'mocha'
import React from 'react'
import { isolateComponent } from '../src'
import { expect } from 'chai'

describe('getting component content', () => {
  const Answer = ({ answer }: { answer: number }) => (
    <span>The answer is {answer}</span>
  )

  const answer = isolateComponent(<Answer answer={42} />)

  it('content() returns inner content', () => {
    expect(answer.content()).to.eq('The answer is 42')
  })

  it('toString() returns outer content', () => {
    expect(answer.toString()).to.eq('<span>The answer is 42</span>')
  })

  it('handles fragments', () => {
    const FragmentExample = () => (
      <>
        <div>A</div>
        <div>B</div>
      </>
    )

    const isolated = isolateComponent(<FragmentExample />)
    expect(isolated.content()).to.eq('<div>A</div><div>B</div>')
  })

  it('handles deep fragments', () => {
    const FragmentExample: React.FC<{}> = () => (
      <section>
        <>
          <div>A</div>
          <div>B</div>
        </>
      </section>
    )

    const isolated = isolateComponent(<FragmentExample />)
    expect(isolated.content()).to.eq('<div>A</div><div>B</div>')
    expect(isolated.toString()).to.eq(
      '<section><div>A</div><div>B</div></section>'
    )
  })

  it('handles array at top level', () => {
    // typescript doesn't support this but it is valid react
    const ArrayExample: any = () => [<div key="0">A</div>, <div key="1">B</div>]

    const isolated = isolateComponent(<ArrayExample />)
    expect(isolated.content()).to.eq('<div>A</div><div>B</div>')
  })
})
