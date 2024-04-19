export default function SubheaderH3({ value }: any) {
    return <h3>
        <span className="before:block before:absolute before:-inset-3 before:skew-y-1 my-2 before:bg-gray-500 relative inline-block">
            <span className="relative text-white">{value}</span>
        </span>
      </h3>
}