export default function SubheaderH3({ value }: any) {
    return <h3>
        <span className="before:block before:absolute before:-inset-2 before:skew-y-2 my-2 before:bg-gray-500 relative inline-block">
            <span className="relative text-white">{value}</span>
        </span>
      </h3>
}