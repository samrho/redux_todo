import React, { FC } from "react";

interface Props {
	text: string;
	done: boolean;
	onToggle(): void;
	onRemove(): void;
}

const TodoItem: FC<Props> = ({ text, done, onToggle, onRemove }) => (
	<li>
		<b
			onClick={onToggle}
			style={{ textDecoration: done ? "line-through" : "none" }}>
			{text}
		</b>
		<button
			onClick={onRemove}
			style={{ all: "unset", marginLeft: "0.5rem" }}></button>
	</li>
);

export default TodoItem;
