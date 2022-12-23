import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../slices/index.js';

const SortModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const showModal = useSelector((state) => state.modal.show);
  const sortingRule = useSelector(({ users }) => users.sortingRule);

  const handleClose = () => dispatch(actions.closeModal());

  const handleChange = (e) => {
    dispatch(actions.setSortingRule(e.target.dataset.sortrule));
    handleClose();
  };

  return (
    <Modal
      show={showModal}
      centered
      animation
      size="sm"
      onHide={handleClose}
      className="border-none rounded-1"
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">
          {t('sorting')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="fw-semibold">
          <Form.Check
            data-sortrule="byFirstName"
            name="group-1"
            className="mb-3"
            type="radio"
            label={t('alphabetically')}
            checked={sortingRule === 'byFirstName'}
            onChange={handleChange}
          />
          <Form.Check
            data-sortrule="byBirthday"
            name="group-1"
            className="mb-1"
            type="radio"
            label={t('byBirthday')}
            checked={sortingRule === 'byBirthday'}
            onChange={handleChange}
          />
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SortModal;
