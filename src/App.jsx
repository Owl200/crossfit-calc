import './App.css'
import useCalculateWeights from '@hooks/useCalculateWeights'

const App = () => {
  const { handleChangeBar, handleChangeWeight, getWeightPerSide, weight, barWeight} = useCalculateWeights()

  const getValuesToPrint = () => {
    const toRender = getWeightPerSide()
    return toRender.map((item, index) => {
        return (weight ?
          <div className='calculation'>
            <h3 key={`${item}-${index}`}>{`Percentage: ${item.percentage}%`}</h3>
            {
              item.lbsPerSide < 0 ?
              <p>Necesitas usar una barra mas pequeña</p> :
              <>
              <p>{`Libras por lado: ${item.lbsPerSide.toFixed(2)}`}</p>
              <p>{`Discos (aprox):`}</p>
              <p className='disc-value'>{`45 ${item.lbs45 || 'X'}`}</p>
              <p className='disc-value'>{`35 ${item.lbs35 || 'X'}`}</p>
              <p className='disc-value'>{`25 ${item.lbs25 || 'X'}`}</p>
              <p className='disc-value'>{`15 ${item.lbs15 || 'X'}`}</p>
              <p className='disc-value'>{`10 ${item.lbs10 || 'X'}`}</p>
              <p className='disc-value'>{`5 ${item.lbs5 || 'X'}`}</p>
              <p className='disc-value'>{`2.5 ${item.lbs2 || 'X'}`}</p>
              </>
            }
          </div> :
          <></>
        )
      })
  } 

  return (
    <>
      <div className='main-container'>
        <div>
          <h1>Calculadora de Porcentajes</h1>
          <p>Ingresa tu peso maximo: </p>
          <input type='number' value={weight} onChange={handleChangeWeight}/>
        </div>
        <div className='bar-selection'>
          <p>Ingresa el peso de la barra: </p>
          <select value={barWeight} onChange={handleChangeBar} >
            <option value={45} selected>45</option>
            <option value={35}>35</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>
      <div className='calculations'>
        {getValuesToPrint()}
      </div>
    </>
  )
}

export default App
