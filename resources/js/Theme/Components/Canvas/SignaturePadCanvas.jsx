import { useRef, useEffect } from 'react'
import { FaCheck, FaEraser } from 'react-icons/fa'
import SignaturePad from 'signature_pad'

export default function SignaturePadCanvas({ uploadSignature, closeModal }) {
  const canvasRef = useRef(null)
  const signaturePadRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      signaturePadRef.current = new SignaturePad(canvas)
    }
  }, [])

  const clearSignature = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear()
    }
  }

  const saveSignature = () => {
    if (signaturePadRef.current && !signaturePadRef.current.isEmpty()) {
      const signatureData = signaturePadRef.current.toDataURL()
      uploadSignature(signatureData)
    } else {
      window.alert('Silahkan tanda tangan terlebih dahulu')
    }
  }

  return (
    <div className="ss">
      <p className="mb-4 font-semibold">Silahkan tanda tangan dikotak ini</p>
      <canvas ref={canvasRef} className="border bg-white rounded-xl shadow-xl"></canvas>
      <div className="mt-6 space-x-4">
        <button
          type="button"
          className="btn flex-center gap-2 bg-red-500 text-white shadow-xl"
          onClick={clearSignature}
        >
          <FaEraser />
          Clear
        </button>

        <button
          type="button"
          className="btn flex-center gap-2 bg-green-500 text-white shadow-xl"
          onClick={saveSignature}
        >
          <FaCheck />
          OK
        </button>
      </div>
    </div>
  )
}
