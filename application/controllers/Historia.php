<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Historia extends CI_Controller {
    public function __construct() 
    {
            parent::__construct();
            $this->load->helper('url');           
    }

	/**
	 * Index Page for this controller.
     */
	public function index()
	{
        $this->load->view('layout/header');
        $this->load->view('navegacion');
        $this->load->view('historia');
        $this->load->view('layout/footer');
	}
}