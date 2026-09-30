export default function JourneyVisual({ type, step }) {
  if (type === 'java') {
    return (
      <div className="visual-shell code-visual">
        <div className="visual-top"><span /><span /><span /></div>
        <pre>{`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}</pre>
        <div className="visual-badge">FIRST LANGUAGE</div>
      </div>
    )
  }

  if (type === 'database') {
    return (
      <div className="visual-shell database-visual">
        <div className="db-center">ALEXANDRIA</div>
        {['Books', 'Users', 'Borrow Requests', 'Transactions', 'Fines'].map((item, index) => (
          <div className={`db-node node-${index + 1}`} key={item}>{item}</div>
        ))}
        <div className="db-line line-a" />
        <div className="db-line line-b" />
        <div className="db-line line-c" />
        <div className="db-line line-d" />
        <div className="visual-badge">DATABASE SYSTEM</div>
      </div>
    )
  }

  if (type === 'oop') {
    return (
      <div className="visual-shell flow-visual">
        {['Program', 'Menu', 'Logic', 'Objects'].map((item, index) => (
          <div className="flow-row" key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item}</strong>
            {index < 3 && <i>↓</i>}
          </div>
        ))}
      </div>
    )
  }

  if (type === 'stack') {
    return (
      <div className="visual-shell stack-visual">
        {['REACT', 'REST API', 'LARAVEL', 'MYSQL'].map((item, index) => (
          <div className="stack-layer" key={item}>
            <span>{index + 1}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'analysis') {
    return (
      <div className="visual-shell analysis-visual">
        <div className="analysis-core">SSIS</div>
        {['Use Case', 'Activity', 'DFD', 'Class Diagram'].map((item, index) => (
          <span className={`analysis-pill analysis-${index + 1}`} key={item}>{item}</span>
        ))}
      </div>
    )
  }

  return (
    <div className="visual-shell deployment-visual">
      <div className="deployment-ring ring-1" />
      <div className="deployment-ring ring-2" />
      <div className="deployment-core">
        <strong>LIVE</strong>
        <span>FULL-STACK</span>
      </div>
      <div className="deploy-chip chip-a">REACT</div>
      <div className="deploy-chip chip-b">LARAVEL</div>
      <div className="deploy-chip chip-c">MYSQL</div>
      <div className="deploy-chip chip-d">QA</div>
    </div>
  )
}
