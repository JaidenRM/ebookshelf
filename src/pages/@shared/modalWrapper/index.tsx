import { CgClose } from 'react-icons/cg'

interface ModalWrapperProps {
  modalChild: React.ReactNode
  onClose: () => void
}

export const ModalWrapper = ({ modalChild, onClose }: ModalWrapperProps) => {
  const cancelPropagation = (ev: React.MouseEvent<HTMLDivElement>): void =>
    ev.stopPropagation()

  return (
    <div className="flex flex-col justify-center align-middle h-full">
      <div className="max-w-xl w-full m-auto px-2" onClick={cancelPropagation}>
        <CgClose
          size="3rem"
          className="absolute top-2 right-2 hover:cursor-pointer"
          onClick={onClose}
        />
        {modalChild}
      </div>
    </div>
  )
}
