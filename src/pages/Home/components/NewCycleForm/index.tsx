import { FormContainer, MinutesAmountInput, TaskInput } from './styles.ts'
import { useContext } from 'react'
import { CyclesContext } from '../../index.tsx'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder={'Dê um nome para o seu projeto'}
        list={'list-suggestions'}
        disabled={!!activeCycle}
        {...register('task')}
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
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
