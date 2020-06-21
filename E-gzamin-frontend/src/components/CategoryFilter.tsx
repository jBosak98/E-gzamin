import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import useCategories from "../hooks/useCategories";

const useStyles = makeStyles((theme) => ({
  content: {
    minWidth: "40%",
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  questions: {
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    height: "90%",
  },
  category: {
    cursor: "pointer",
    border: "1px solid red",
    borderColor: theme.palette.text.secondary,
    borderRadius: "20px",
    padding: "3px 13px",
    fontSize: "12px",
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
  },
  search: {
    width: "100%",
  },
  singleSpace: {
    width: "100%",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.primary.main,
  },
  removeCourseButton: {
    marginLeft: "25px",
  },
  courseButtons: {
    marginBottom: "15px",
  },
}));

type CategoryType = {
  id: number;
  name: string;
};
type CategoriesType = {
  // categories: Array<CategoryType>;
  onCategoryClick: (categoryId: number) => (event: unknown) => unknown;
};

const CategoryFilter = ({ onCategoryClick }: CategoriesType) => {
  const { categories, createCategory } = useCategories();
  console.log(categories);
  const styles = useStyles();
  const [isAddCoursePopupOpened, setAddCoursePopupOpened] = useState<boolean>(
    false
  );
  const toggleAddCoursePopup = (): void =>
    setAddCoursePopupOpened(!isAddCoursePopupOpened);

  const [isRemoveCoursePopupOpened, setRemoveCoursePopupOpened] = useState<
    boolean
  >(false);

  const toggleRemoveCoursePopup = (): void =>
    setRemoveCoursePopupOpened(!isRemoveCoursePopupOpened);
  return (
    <div className={styles.content}>
      <Grid
        container
        alignContent="space-between"
        direction="row"
        className={styles.courseButtons}
      >
        <Button
          onClick={toggleAddCoursePopup}
          variant="contained"
          color="primary"
        >
          ADD COURSE
        </Button>
        <Button
          onClick={toggleRemoveCoursePopup}
          className={styles.removeCourseButton}
          variant="contained"
          color="primary"
        >
          REMOVE COURSE
        </Button>
      </Grid>

      {categories.map(({ id, name }) => (
        <Box
          className={styles.category}
          component="span"
          key={id}
          m={1}
          onClick={onCategoryClick(id)}
        >
          {name}
        </Box>
      ))}
      <div className={styles.singleSpace}></div>
      <AddCoursePopup
        open={isAddCoursePopupOpened}
        onClose={toggleAddCoursePopup}
        onSubmit={createCategory}
      />
    </div>
  );
};

type AddCoursePopupProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (name: string) => any;
};

const usePopupStyles = makeStyles((theme: Theme) => ({
  addCoursePopup: {
    padding: "20px",
    margin: "20px",
    minHeight: "300px",
    width: "500px",
  },
}));

const AddCoursePopup = ({ open, onClose, onSubmit }: AddCoursePopupProps) => {
  const [courseName, setCourseName] = useState<string>(undefined);
  const styles = usePopupStyles();
  const onClick = () => {
    onSubmit(courseName);
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <Grid
        container
        className={styles.addCoursePopup}
        direction="column"
        justify="space-between"
      >
        <TextField
          id="standard-basic"
          value={courseName}
          onChange={({ target }): void => setCourseName(target.value)}
          label="Course name"
        />
        <Button onClick={onClick} variant="contained" color="primary">
          ADD COURSE
        </Button>
      </Grid>
    </Dialog>
  );
};

export default CategoryFilter;
