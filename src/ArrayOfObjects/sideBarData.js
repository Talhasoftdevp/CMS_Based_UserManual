export const side_bar = [
	/************************************ ADMINISTRATION *********************************/
	{
		title: 'Administration',
		data_toggle: 'Admin_isOpen',
		childs: [
			{
				title: 'General',
				data_toggle: 'General_isOpen',
				childs: [
					{
						title: 'General',
						route: '/General/General'
					}
				]
			},
			{
				title: 'Users',
				data_toggle: 'User_isOpen',
				childs: [
					{
						title: 'Create New User',
						route: '/Users/CreateUser'
					},
					{
						title: 'Edit User',
						route: '/Users/EditUser'
					},
					{
						title: 'Delete User',
						route: '/Users/DeleteUser'
					}
				]
			},
			{
				title: 'Groups',
				data_toggle: 'Group_isOpen',
				childs: [
					{
						title: 'Create New Group',
						route: '/Groups/CreateGroup'
					},
					{
						title: 'Edit Group',
						route: '/Groups/EditGroup'
					},
					{
						title: 'Delete Group',
						route: '/Groups/DeleteGroup'
					}
				]
			},
			{
				title: 'Templates',
				data_toggle: 'Template_isOpen',

				childs: [
					{
						title: 'Create New Template',
						route: '/Template/CreateTemplate'
					},
					{
						title: 'Edit Template',
						route: '/Template/EditTemplate'
					},
					{
						title: 'Delete Template',
						route: '/Template/DeleteTemplate'
					}
				]
			},
			{
				title: 'Work Flow',
				data_toggle: 'WorkFlow_isOpen',
				childs: [
					{
						title: 'Design Work Flow',
						route: '/WorkFlow/Design'
					},
					{
						title: 'Edit Work Flow',
						route: '/WorkFlow/EditWorkFlow'
					},
					{
						title: 'Delete WorkFlow',
						route: '/WorkFlow/DeleteWorkFlow'
					},
					{
						title: 'Debug',
						route: '/Integerator/Configuration'
					},
					{
						title: 'Production',
						route: '/Integerator/Configuration'
					}
				]
			},
			{
				title: 'Integrators',
				data_toggle: 'Integerator_isOpen',

				childs: [
					{
						title: 'Configuration',
						route: '/Integerator/Configuration'
					}
				]
			}
		]
	},
	/************************************ DESKTOP *********************************/
	{
		title: 'Desktop',
		data_toggle: 'Desktop_isOpen',
		childs: [
			{
				title: 'Repository',
				data_toggle: 'repository_isOpen',
				childs: [
					{
						title: 'Create New repository',
						route: '/Repository/CreateRepository'
					},
					{
						title: 'Rename Repository',
						route: '/Repository/RenameRepository'
					},
					{
						title: 'Delete Repository',
						route: '/Repository/DeleteRepository'
					},
					{
						title: 'Find Repository',
						route: '/Repository/FindRepository'
					}
				]
			},
			{
				title: 'Documents',
				data_toggle: 'Document_isOpen',
				childs: [
					{
						title: 'Upload Document',
						route: '/Documents/UploadDocument'
					},
					{
						title: 'Delete Document',
						route: '/Documents/DeleteDocument'
					},
					{
						title: 'Edit Document',
						route: '/Documents/EditDocument'
					},
					{
						title: 'Find Document',
						route: '/Documents/FindDocument'
					},
					{
						title: 'Bookmark Document',
						route: '/Documents/BookmarkDocument'
					},
					{
						title: 'Copy Document',
						route: '/Documents/CopyDocument'
					},
					{
						title: 'Move Document',
						route: '/Documents/MoveDocument'
					},
					{
						title: 'Download Document',
						route: '/Documents/DownloadDocument'
					},
					{
						title: 'Create Document Shortcut',
						route: '/Documents/CreateDocumentShortcut'
					}
				]
			},
			{
				title: 'Search',
				data_toggle: 'Search_isOpen',
				childs: [
					{
						title: 'Search Document',
						route: '/Search/Search'
					}
				]
			},
			{
				title: 'Recycle Bin',
				data_toggle: 'RecycleBin_isOpen',

				childs: [
					{
						title: 'Restore File/Folder',
						route: '/RecycleBin/Restore_File_Folder'
					},
					{
						title: 'Empty Recycle Bin',
						route: '/RecycleBin/EmptyRecycleBin'
					}
				]
			},
			{
				title: 'Search Results',
				data_toggle: 'SearchResults_isOpen',
				childs: [
					{
						title: 'Search Results',
						route: '/SearchResults/SearchResults'
					}
				]
			}
		]
	},
	/************************************ ADVANCE SEARCH *********************************/
	{
		title: 'Advance Search',
		data_toggle: 'AdvanceSearch_isOpen',
		childs: [
			{
				title: 'Contextual Search',
				data_toggle: 'ContextualSearch_isOpen',
				childs: [
					{
						title: 'Contextual Search',
						route: '/AdvanceSearch/ContextualSearch'
					}
				]
			},
			{
				title: 'Search By Date',
				data_toggle: 'SearchByDate_isOpen',
				childs: [
					{
						title: 'Search By Date',
						route: '/AdvanceSearch/SearchByDate'
					}
				]
			},
			{
				title: 'Search By Template',
				data_toggle: 'SearchByTemplate_isOpen',
				childs: [
					{
						title: 'Search By Template',
						route: '/AdvanceSearch/SearchByTemplate'
					}
				]
			}
		]
	}
];
export default {
	side_bar
};
