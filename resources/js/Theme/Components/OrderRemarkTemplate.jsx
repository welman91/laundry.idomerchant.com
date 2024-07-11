import OrderRemarkCell from './OrderRemarkCell'

export default function OrderRemarkTemplate({ order, options }) {
  const {
    remark_brands,
    remark_colors,
    remark_sizes,
    remark_patterns,
    remark_defects,
    remark_defect_positions,
  } = options

  const getBrand = () => {
    return order.remark_brand_id
      ? remark_brands.find((b) => b.id == order.remark_brand_id)?.name
      : order.remark_manual_brand
  }

  const getDefectPosition = () => {
    return order.remark_defect_view
      ? `${
          remark_defect_positions.find((s) => s.id == order.remark_defect_position)?.name
        }, ${order.remark_defect_view}`
      : ''
  }

  return (
    <div className="w-full text-left text-gray-700 dark:text-white grid grid-cols-4 gap-4">
      {/* BRAND */}
      <div>
        <p className="text-xs">Brand</p>
        <p className="rounded-full border-b border-gray-500">{getBrand()}</p>
      </div>

      {/* WARNA */}
      <div>
        <p className="text-xs">Warna</p>
        {order.remark_colors?.length > 0 ? (
          <div className="rounded-full border-b border-gray-500 flex-start gap-2">
            {order.remark_colors?.map((c, i) => {
              return (
                <p key={i}>
                  {remark_colors.find((s) => s.id == c.id || s.id == c.color_id)?.name}
                </p>
              )
            })}
          </div>
        ) : (
          <p className="rounded-full border-b border-gray-500 flex-start gap-2">N/A</p>
        )}
      </div>

      {/* SIZE */}
      <OrderRemarkCell
        label="Ukuran"
        value={remark_sizes.find((s) => s.id == order.remark_size_id)?.name}
      />

      {/* PATTERN */}
      <OrderRemarkCell
        label="Pola"
        value={remark_patterns.find((s) => s.id == order.remark_pattern_id)?.name}
      />

      {/* DEFECT */}
      <OrderRemarkCell
        label="Defect"
        value={remark_defects.find((s) => s.id == order.remark_defect_id)?.name}
      />

      {/* POSISI */}
      <OrderRemarkCell label="Posisi Defect" value={getDefectPosition()} />

      {/* TAMBAHAN */}
      <OrderRemarkCell label="Catatan Tambahan" value={order.remark_tambahan} />
    </div>
  )
}
