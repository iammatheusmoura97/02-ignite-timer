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
              list={'list-suggestions'}
            />

            <datalist id={'list-suggestions'}>
              <option value={'Projeto 1'} />
              <option value={'Banana'} />
              <option value={'Projeto 3'} />
              <option value={'Projeto 4'} />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
              id="minutesAmount"
              type={'number'}
              placeholder={'00'}
              step={5}
              min={5}
              max={60}
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
