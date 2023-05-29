import styled from "styled-components";

export const ToDoListStyled = styled.li`
  border-bottom: 1px solid;
  border-color: #ededed;
  padding: 10px;
  position: relative;

  .input__block:hover .delete__none {
    display: block;
  }
  .delete__none {
    display: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
  }
  .delete__none:after {
    content: "×";
  }
  .nochecked {
    border: none;
  }
  .nochecked .item__radio__button {
    background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E);
    background-repeat: no-repeat;
  }
  .checked {
    text-decoration: line-through;
    border: none;
    padding-right: 400px;
  }
  .checked .item__radio__button {
    background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E);
    background-repeat: no-repeat;
  }
  .view {
    display: flex;
    align-items: center;
  }
  .item__radio__button {
    width: 40px;
    height: 40px;
    padding-right: 15px;
  }
  .toggle {
    opacity: 0;
    position: absolute;
    width: 0;
    height: 0;
  }
  .change__opacity {
    opacity: 0.3;
    width: 100%;
  }

  .nochange {
    opacity: 1;
    width: 100%;
  }
`;
