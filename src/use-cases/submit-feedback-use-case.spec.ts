import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const submitFeedback = new SubmitFeedbackUseCase(
  { create: async () => {} },
  { sendMail: async () => {} }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
   await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,dkjghdfjgfhdlgkjdfhlgkjdfhg',
    })).resolves.not.toThrow()
  })

  it('should be able to submit a feedback without type', async () => {
   await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,dkjghdfjgfhdlgkjdfhlgkjdfhg',
    })).rejects.toThrow()
  })

  it('should be able to submit a feedback without comment', async () => {
   await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,dkjghdfjgfhdlgkjdfhlgkjdfhg',
    })).rejects.toThrow()
  })

  it('should be able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
       type: 'BUG',
       comment: 'example comment',
       screenshot: 'teste.jpg',
     })).rejects.toThrow()
   })
 })
