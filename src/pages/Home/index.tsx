import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles.ts'
import { Play } from 'phosphor-react'

export function Home() {
  return (
    <div>
      <HomeContainer>
        <form>
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
              id="task"
              placeholder={'Dê um nome para o seu projeto'}
            />

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
              id="minutesAmount"
              type={'number'}
              placeholder={'00'}
            />

            <span>minutos.</span>
          </FormContainer>
          <CountdownContainer>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
          </CountdownContainer>
          <StartCountdownButton disabled type={'submit'}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        </form>
      </HomeContainer>
    </div>
  )
}
