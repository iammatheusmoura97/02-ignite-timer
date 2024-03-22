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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newCycleFormValidatorSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa de ser no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa de ser no máximo 5 minutos.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidatorSchema>

export function Home() {
  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidatorSchema),
      defaultValues: {
        task: '',
        minutesAmount: 0,
      },
    })

  const task = watch('task')
  const isSubmitDisable = !task

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  console.log(formState.errors)

  return (
    <div>
      <HomeContainer>
        <form onSubmit={handleSubmit(handleCreateNewCycle)}>
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
              id="task"
              placeholder={'Dê um nome para o seu projeto'}
              list={'list-suggestions'}
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
              {...register('minutesAmount', { valueAsNumber: true })}
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
          <StartCountdownButton disabled={isSubmitDisable} type={'submit'}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        </form>
      </HomeContainer>
    </div>
  )
}
