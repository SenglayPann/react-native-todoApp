import { createRef } from "react";
import { Todo } from "../types/Todo";

export const todoRef = createRef<null | Todo>();
