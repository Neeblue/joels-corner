export default function Tag(props: { name: string }) {
    return (
        <div className="tag bg-secondary text-neutral py-[0.2rem] px-[0.4rem] rounded-full inline-block m-[0.3rem] text-[0.7rem] font-semibold">
            {props.name}
        </div>
    )
}