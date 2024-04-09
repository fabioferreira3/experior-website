export default function Subheader({ value }: any) {
    return <h2>
        <span className="before:block before:absolute before:-inset-1 px-2 py-3 before:-skew-y-2 before:bg-secondary relative inline-block">
            <span className="relative text-white">{value}</span>
        </span>
      </h2>
}