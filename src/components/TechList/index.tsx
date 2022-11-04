import { useContext } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { ContextLogin } from "../../context/LoginProvider";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Main } from "./styles";
import ModalCreateTech from "../ModalCreateTech";
import { ContexModal } from "../../context/ModalProvider";

import { IoTrashOutline } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import ModalEditTech from "../ModalEditTech";

function TechList() {
  const {
    user: { techs },
  } = useContext(ContextLogin);
  const {
    isOpenModal,
    setIsOpenModal,
    deleteTech,
    isOpenModalEdit,
    setIsOpenModalEdit,
    setIdEdit,
  } = useContext(ContexModal);

  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <header className="containerTech__header">
        <h2 className="containerTech__header__title">Tecnologias</h2>
        <button className="containerTech__header__btnAdd">
          <BiAddToQueue
            size={15}
            onClick={() => setIsOpenModal(!isOpenModal)}
          />
        </button>
      </header>

      <section className="containerList">
        <ul className="listTech">
          {techs.length === 0 ? (
            <Box width={"90%"} bgcolor="gray.400" height={"100%"} p={1}>
              <Skeleton height={80} />
              <Skeleton height={80} width={"80%"} />
              <Skeleton height={80} width={"60%"} />
            </Box>
          ) : (
            techs.map((e, index) => {
              return (
                <li key={index}>
                  <Stack
                    direction="row"
                    bgcolor="gray.500"
                    p={2}
                    justifyContent={"space-between"}
                    borderRadius={".25rem"}
                    spacing={0.5}
                  >
                    <Typography
                      component="h3"
                      color="gray.100"
                      fontSize={"14px"}
                    >
                      {e.title}
                    </Typography>
                    <Stack direction="row" alignItems={"center"} gap={2}>
                      <Typography
                        component="p"
                        color="gray.200"
                        fontSize={".75rem"}
                      >
                        {e.status}
                      </Typography>
                      <BiEdit
                        className="editTech"
                        onClick={() => {
                          setIsOpenModalEdit(!isOpenModalEdit);
                          setIdEdit(e.id);
                        }}
                      />
                      <IoTrashOutline onClick={() => deleteTech(e.id)} />
                    </Stack>
                  </Stack>
                </li>
              );
            })
          )}
        </ul>
      </section>
      {isOpenModalEdit && <ModalEditTech />}
      {isOpenModal && <ModalCreateTech />}
    </Main>
  );
}

export default TechList;
